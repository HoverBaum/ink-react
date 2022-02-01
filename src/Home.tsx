/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, Page, Spacer, Text } from '@geist-ui/core'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { storyContent } from '../story/storyContent'
import { tellStory } from './Story/story.slice'

export const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const startGame = () => {
    //@ts-ignore
    dispatch(tellStory(storyContent))
    navigate('/story')
  }

  return (
    <Page
      css={css`
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
      `}
    >
      <Text h1>The Sword 🗡</Text>
      <Text h4>Adventure awaits</Text>

      <Spacer h={3} />
      <Button onClick={() => navigate('/credits')}>Credits</Button>
      <Spacer h={2} />
      <Button onClick={startGame} autoFocus={true}>
        Start game
      </Button>
    </Page>
  )
}
