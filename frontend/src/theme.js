import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#BF4158', // Change the primary color
    },
    secondary: {
      main: '#06204A', // Change the secondary color
    },
  },
  typography: {
    fontFamily: 'sans-serif', // Change the default font family
  },
});

export default theme;
