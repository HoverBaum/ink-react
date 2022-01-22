/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react"
import { Button } from "@geist-ui/core"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Choices } from "./Choices"
import { StoryState } from "./store"
import { resetStory } from "./story.slice"

function App() {
  const { paragraphs, title, scene } = useSelector(
    (state: StoryState) => state.story
  )
  const dispatch = useDispatch()
  const [theme, setTheme] = useState("light")

  useEffect(() => console.log("theme is", theme), [theme])

  useEffect(() => {
    setTimeout(() => setTheme("Custom"), 1000)
  }, [])

  return (
    <div
      css={css`
        background-image: url(${scene?.src});
        background-size: cover;
        background-position: center right;
        transition: background-image 0.5s ease-in-out;
        height: 100vh;
        overflow-y: scroll;
        ::-webkit-scrollbar {
          display: none;
        }
        width: 100vw;
        box-sizing: border-box;
        padding: 4rem;
        color: ${scene?.textColor || "inherit"};
      `}
    >
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
          }
        `}
      />
      <h1>{title}</h1>
      <Button onClick={() => dispatch(resetStory)}>reset</Button>
      <br />
      <div
        css={css`
          max-width: 40rem;
        `}
      >
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <Choices />
      </div>
    </div>
  )
}

export default App
