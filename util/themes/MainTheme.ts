import { createMuiTheme } from '@material-ui/core/styles'

import orange from '@material-ui/core/colors/orange'

const MainTheme = createMuiTheme({
  overrides: {
    MuiCardHeader: {
      action: {
        margin: 0
      }
    },

    MuiSelect: {
      selectMenu: {
        paddingLeft: 4
      }
    }
  },
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
      fontSize: '3.2rem'
    },
    overline: {
      fontDisplay: 'swap',
      fontFamily: '""Roboto", "Helvetica", "Arial", sans-serif"'
    },
    useNextVariants: true
  }
})

export default MainTheme
