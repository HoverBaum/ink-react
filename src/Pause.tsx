/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {
  Button,
  Divider,
  Drawer,
  Link,
  Slider,
  Spacer,
  Text,
} from '@geist-ui/core'
import { PauseFill } from '@geist-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useSettings } from './Settings/useSettings'
import { RootState } from './store'
import { setStoryState } from './Story/story.slice'

/**
 * Pause menu that can be opened to the left.
 * This renders a button to open a drawer.
 */
export const Pause = () => {
  const storyState = useSelector((state: RootState) => state.story.storyState)
  const isOpen = storyState === 'paused'
  const dispatch = useDispatch()
  const { textSpeed, setSpeed } = useSettings()
  const navigate = useNavigate()

  const closeDrawer = () => dispatch(setStoryState('running'))
  const openDrawer = () => dispatch(setStoryState('paused'))

  // Custom navigation function so that we close the Drawer on navigation.
  // This prevents a bug where navigation alone doesn't reset overflow:hidden on body.
  const navigateTo =
    (path: string) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      closeDrawer()
      e.preventDefault()
      setTimeout(() => navigate(path), 0)
    }

  return (
    <>
      <PauseFill
        onClick={openDrawer}
        css={css`
          position: fixed;
          top: 1rem;
          left: 1rem;
          opacity: 0.3;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          &:hover {
            opacity: 1;
          }
        `}
      />
      <Drawer
        visible={isOpen}
        onClose={closeDrawer}
        placement="left"
        css={css`
          min-width: 20rem;
          /* Important overwrite more specific rules from the ui lib. */
          padding-right: 2rem !important;
        `}
      >
        <Drawer.Title>Paused</Drawer.Title>
        <Drawer.Subtitle>Take a breath</Drawer.Subtitle>
        <Drawer.Content
          css={css`
            display: flex;
            flex-direction: column;
            /* Well, this is ugly but allows us to keep the semantic of the Drawer. */
            height: 100% !important;
          `}
        >
          <Text>Text speed</Text>
          <Slider value={textSpeed} onChange={setSpeed} max={20} min={1} />

          <Spacer h={1} />
          <Divider />

          <Text>
            View{' '}
            <Link onClick={navigateTo('/credits')} underline color>
              credits
            </Link>
          </Text>
          <div
            css={css`
              /* Only here to move buttons to the buttom. */
              flex-grow: 1;
            `}
          ></div>
          <Button onClick={closeDrawer} type="secondary" ghost>
            Close
          </Button>
        </Drawer.Content>
      </Drawer>
    </>
  )
}
