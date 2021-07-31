import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import { ligthTheme } from './utils/theme'

import { Routes } from './routes'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={ligthTheme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
