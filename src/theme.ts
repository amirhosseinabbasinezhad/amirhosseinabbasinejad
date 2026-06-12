import { createTheme } from '@mui/material/styles';
import '@fontsource/vazirmatn';

export const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, sans-serif',
  },
  palette: {
    primary: {
      main: '#0f172a',
      light: '#1e293b',
      dark: '#020617',
    },
    secondary: {
      main: '#38bdf8',
      light: '#7dd3fc',
      dark: '#0284c7',
    },
    background: {
      default: '#eef2f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e2a3e',
      secondary: '#64748b',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: '2rem 1rem',
          backgroundColor: '#eef2f5',
        },
      },
    },
  },
});