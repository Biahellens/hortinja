// dependencies
import React, { FC } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// pages
import { Home } from './pages/Home'

export const Routes: FC = () => (
  <BrowserRouter>
    <Route exact path="/" component={() => <Home />} />
  </BrowserRouter>
)
