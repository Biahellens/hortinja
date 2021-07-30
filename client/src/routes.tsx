// dependencies
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// theme
import { ligthTheme } from './utils/theme'

// routes
//import { items } from './routes/items'

// pages
import {Home} from './pages/Home'

export const Routes = () => {

  return (
    <BrowserRouter>
      <Route
        exact
        path='/'
        component={() => (<Home theme={ligthTheme}/>)}
      />
    </BrowserRouter>
)
}
