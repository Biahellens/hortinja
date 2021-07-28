import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'

import { Home } from './pages'
import { lightTheme } from './utils/theme'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Home />
    </ThemeProvider>

  );
}

export default App;
