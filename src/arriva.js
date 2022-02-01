import { createTheme } from '@mui/material/styles';

const arriva = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#050d21',
    },
    secondary: {
      main: '#baa888',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#232429',
      secondary: '#313238',
      disabled: '#ececec',
    },
    error: {
      main: '#b71c1c',
    },
    warning: {
      main: '#ffa726',
    },
    info: {
      main: '#214b85',
    },
    success: {
      main: '#1b5e20',
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple!
      },
    },
  },
});

export default arriva