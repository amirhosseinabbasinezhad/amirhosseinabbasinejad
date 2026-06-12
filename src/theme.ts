import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Vazirmatn, sans-serif',
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
        // ========== تنظیمات مخصوص چاپ و PDF ==========
        '@media print': {
          body: {
            padding: 0,
            margin: 0,
            backgroundColor: 'white !important',
          },
          '*': {
            WebkitPrintColorAdjust: 'exact !important',
            printColorAdjust: 'exact !important',
            colorAdjust: 'exact !important',
          },
          '.resume-grid': {
            display: 'grid !important',
            gridTemplateColumns: '34% 66% !important',
          },
          '.sidebar': {
            backgroundColor: '#0f172a !important',
            WebkitPrintColorAdjust: 'exact !important',
            printColorAdjust: 'exact !important',
          },
          '.sidebar, .sidebar *': {
            color: '#e2e8f0 !important',
          },
          '.sidebar i, .sidebar .fas, .sidebar .fab': {
            color: '#38bdf8 !important',
          },
          '.main-content': {
            backgroundColor: 'white !important',
          },
          '.progress-bar': {
            backgroundColor: '#1e293b !important',
          },
          '.progress-fill': {
            backgroundColor: '#38bdf8 !important',
          },
          '.section, .job, .project-card, .gallery-item': {
            breakInside: 'avoid',
            pageBreakInside: 'avoid',
          },
          '@page': {
            size: 'A4',
            margin: '1.2cm',
          },
          '.gallery': {
            display: 'grid !important',
            gridTemplateColumns: 'repeat(2, 1fr) !important',
          },
          '.resume-container': {
            boxShadow: 'none !important',
            borderRadius: '0 !important',
          },
          'button, .MuiButton-root, .download-pdf-btn': {
            display: 'none !important',
          },
        },
      },
    },
  },
});