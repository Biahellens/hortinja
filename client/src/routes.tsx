// dependencies
import React, { FC } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// theme
import { ligthTheme } from './utils/theme'

// pages
import { Home } from './pages/Home'

export const Routes: FC = () => (
  <BrowserRouter>
    <Route exact path="/" component={() => <Home theme={ligthTheme} />} />
  </BrowserRouter>
)
