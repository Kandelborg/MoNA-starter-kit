import { createMuiTheme } from '@material-ui/core/styles'

import orange from '@material-ui/core/colors/orange'

const SecondaryTheme = createMuiTheme({
  palette: {
    /*  type: 'dark', */
    primary: {
      main: orange[500]
    },
    secondary: {
      main: '#00b0ff'
    },
    tonalOffset: 0.4
  },
  typography: {
    h1: {
      fontSize: '4rem'
    },
    overline: {
      fontDisplay: 'swap',
      fontFamily: '""Roboto", "Helvetica", "Arial", sans-serif"'
    },
    useNextVariants: true
  }
})

export default SecondaryTheme
