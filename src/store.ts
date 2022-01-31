import { configureStore, Middleware } from '@reduxjs/toolkit'
import storySlice, {
  addCountedStoryLine,
  addStoryLine,
  setChoices,
  setCountedChoices,
  tellStory,
} from './Story/story.slice'
import { storyContent } from '../story/storyContent'
import { ChoiceType, CountedChoice, CountedStoryLine, StoryLine } from './story'
import { lineToWords } from './Story/story.util'
import settingsSlice from './Settings/settings.slice'

let linesSinceLastChoice = 0
let wordsSinceLastChoice = 0

const lineCountAdder: Middleware = (store) => (next) => (action) => {
  if (addStoryLine.match(action)) {
    const line: CountedStoryLine = {
      ...(action.payload as StoryLine),
      lineNumber: linesSinceLastChoice,
      wordCount: wordsSinceLastChoice,
    }
    linesSinceLastChoice += 1
    wordsSinceLastChoice += lineToWords(line.text).length
    return next(addCountedStoryLine(line))
  }
  if (setChoices.match(action)) {
    const choices: CountedChoice[] = (action.payload as ChoiceType[]).map(
      (choice) => ({
        ...choice,
        lineNumber: linesSinceLastChoice,
        wordCount: wordsSinceLastChoice,
      })
    )
    linesSinceLastChoice = 0
    wordsSinceLastChoice = 0
    return next(setCountedChoices(choices))
  }
  return next(action)
}

export const store = configureStore({
  reducer: {
    story: storySlice,
    settings: settingsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lineCountAdder),
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch

//@ts-ignore
store.dispatch(tellStory(storyContent))
