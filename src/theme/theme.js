// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => createTheme({
  palette: {
    mode, // light or dark mode
    primary: {
      main: mode === 'light' ? '#1976d2' : '#90caf9',
    },
    secondary: {
      main: mode === 'light' ? '#9c27b0' : '#ce93d8',
    },
    background: {
      default: mode === 'light' ? '#f5f5f5' : '#121212',
      paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'light' ? '#ffffff' : '#1e1e1e',
          color: mode === 'light' ? '#000000' : '#ffffff',
          boxShadow: mode === 'light'
            ? '0 4px 12px rgba(0,0,0,0.05)'
            : '0 4px 12px rgba(0,0,0,0.3)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: mode === 'light'
              ? '0 8px 16px rgba(0,0,0,0.1)'
              : '0 8px 16px rgba(0,0,0,0.5)',
          },
        },
      },
    },
  },
});

export default getTheme;
