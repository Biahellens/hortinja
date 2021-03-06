import { createTheme } from '@material-ui/core/styles'

export const ligthTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#006B5C',
      dark: '#757270',
    },

    secondary: {
      main: '#FBFAFA',
      light: '#FFFFFF 90%',
    },

    text: {
      primary: '#111111',
    },

    error: {
      main: '#DB4444',
    },
  },
})
