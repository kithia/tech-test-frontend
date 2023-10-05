import { createTheme } from '@mui/material/styles';

/**
 * Custom, global theme overides
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#BF4158', // Change the primary color
    },
    secondary: {
      main: '#06204A', // Change the secondary color
    },
  }
});

export default theme;
