import { isIdentifier } from 'typescript'
import { $, fs } from 'zx'

console.log('Generating overview 🗺')

const tmpMermaidFile = './../../story/overview.mmd'

/**
 * New idea: parse the JSON with more knowledge about it's setup.
 * From the special objects of all containers find potential named containers.
 * Designate all of these names as potential divert target and find mentions of them.
 * Strip found divert targets of relative pathing elements to get a clean mermaid diagram with proper naming.
 * Alternatively we could build up the right names for knots ourselfes.
 * The last element of a container (arry) is called the containerTerminator and is either null or containes
 * named objects plus "#n" and "#f".
 * https://github.com/inkle/ink/blob/master/Documentation/ink_JSON_runtime_format.md
 *
 * The problem will likely be variable assigned divert targets. And functions for diverts.
 * Assuming we just care to know where you could go from any point we can probably gather a list
 * of all possible divert targets. But that will be some effort....
 * Might be nice to initially just implement a warning for that :D
 */

type Identifier = {
  id: string
  isThread: boolean
  regex: RegExp
}

type Transition = {
  to: string
  from: string
}

const transitionsFromContainer = (
  containerIdentifier: string,
  container: any[],
  identifiers: Identifier[]
): Transition[] => {
  if (!Array.isArray(container)) return []
  const containerTerminator = container.pop()
  const containerJSON = JSON.stringify(container, null, 2)
  const containerTransitions = containerJSON
    .split('\n')
    .filter((line) => line.includes('->":'))
    .reduce((transitions, line) => {
      const destination = line.split(':')[1].trim().replace(/"/g, '')

      const targetIdentifier = identifiers.find((identifier) => {
        return identifier.regex.test(destination)
      })
      if (!targetIdentifier) return transitions
      if (targetIdentifier.id === containerIdentifier) return transitions
      const transitionsToAdd = [
        {
          from: containerIdentifier,
          to: targetIdentifier.id,
        },
      ]
      if (targetIdentifier.isThread)
        transitionsToAdd.push({
          from: targetIdentifier.id,
          to: containerIdentifier,
        })
      return transitions.concat(transitionsToAdd)
    }, [] as Transition[])

  // Now also find all transitions from sub-containers.
  const terminatorTransitions: Transition[] = terminaotrKeys(
    containerTerminator
  ).reduce(
    (transitions, key) =>
      transitions.concat(
        transitionsFromContainer(
          `${containerIdentifier}.${key}`,
          containerTerminator[key],
          identifiers
        )
      ),
    [] as Transition[]
  )
  return containerTransitions.concat(terminatorTransitions)
}

const terminaotrKeys = (terminator): string[] => {
  if (!terminator) return []
  return Object.keys(terminator).filter((key) => key !== '#n' && key !== '#f')
}

// Let's turn the ink files into a mermaid diagram.
// We probably want to parse the json for this.
// Looks liek we can search for "->" attributes and ann values that don't start with a "." should generate a new connection.
// Like always remember which knot we are currently in, search for arrows and generate a transition for each arrow found.

const run = async () => {
  const parsedInk = await fs.readJson('./../../story/TheInkSword.ink.json')

  const rootTerminator = parsedInk.root[parsedInk.root.length - 1]

  const knots = terminaotrKeys(rootTerminator)

  const knotAndStichIdentifiers: Identifier[] = knots
    .reduce((identifiers, knot) => {
      const knotIdentifier: Identifier = {
        id: knot,
        isThread: false,
        regex: new RegExp(`(^${knot}$)`),
      }
      if (rootTerminator[knot][rootTerminator[knot].length - 2] === 'done')
        knotIdentifier.isThread = true
      identifiers.push(knotIdentifier)
      const knotTerminator =
        rootTerminator[knot][rootTerminator[knot].length - 1]
      // knotTerminator can be null.
      if (knotTerminator) {
        const keys = terminaotrKeys(knotTerminator)
        identifiers = identifiers.concat(
          keys.map((key) => ({
            id: `${knot}.${key}`,
            isThread: false,
            regex: new RegExp(`(^${knot}.${key}$)|((\\.\\^)+\\.${key})`),
          }))
        )
      }
      return identifiers
    }, [] as Identifier[])
    .filter((identifier) => identifier.id !== 'global decl')
    // Assuming all function include a "_" we filter them out.
    .filter((identifier) => !identifier.id.includes('_'))

  console.log(knotAndStichIdentifiers)

  const transitions = terminaotrKeys(rootTerminator).reduce(
    (transitions, knot) => {
      return transitions.concat(
        transitionsFromContainer(
          knot,
          rootTerminator[knot],
          knotAndStichIdentifiers
        )
      )
    },
    [] as Transition[]
  )

  // Remove duplicates from transitions.
  const transitionsMap = {}
  transitions.forEach((transition) => {
    transitionsMap[JSON.stringify(transition)] = transition
  })
  const uniqueTransitions = Object.values(transitionsMap) as Transition[]

  console.log(uniqueTransitions)

  // A list of all endpoints that have a transition to but not from them.
  const endpoints = uniqueTransitions.reduce(
    (endpoints, transition) => {
      return endpoints.filter((endpoint) => endpoint !== transition.from)
    },
    knotAndStichIdentifiers.map((identifier) => identifier.id)
  )

  const startpoints = uniqueTransitions.reduce(
    (startpoints, transition) => {
      return startpoints.filter((startpoint) => startpoint !== transition.to)
    },
    knotAndStichIdentifiers.map((identifier) => identifier.id)
  )

  const mermaidDiagram = `graph TD;${knotAndStichIdentifiers
    .map((identifier) => identifier.id)
    .join(';')};${uniqueTransitions
    .map(({ from, to }) => `${from}-->${to}`)
    .join(';')};${endpoints
    .map((endpoint) => `${endpoint}((${endpoint}))`)
    .join(';')};${startpoints
    .map((startpoint) => `${startpoint}{${startpoint}}`)
    .join(';')};`

  console.log(mermaidDiagram)

  // Turn the mermaid dinagram into an image we can view.
  await fs.writeFile(tmpMermaidFile, mermaidDiagram)

  $`npx mmdc -i ${tmpMermaidFile} -o ./../../story/overview.svg`
}

run()
