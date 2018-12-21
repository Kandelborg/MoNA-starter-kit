import { createMuiTheme } from '@material-ui/core/styles';

import orange from '@material-ui/core/colors/orange';

const MainTheme = createMuiTheme({
  palette: {
    tonalOffset: 0.4,
    primary: {
      main: orange[500],
    },
    secondary: {
      main: '#00b0ff',
    },
  },
  typography: {
    useNextVariants: true,

    h1: {
      fontSize: '4rem',
    },

    overline: {
      fontDisplay: 'swap',
      fontFamily: '""Roboto", "Helvetica", "Arial", sans-serif"',
    },
  },
});

export default MainTheme;
