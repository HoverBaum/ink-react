/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Story } from './Story/Story'

function App() {
  return (
    <div>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
          }
        `}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Story />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
