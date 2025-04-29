// src/components/ErrorBanner.jsx
import { Alert, Snackbar } from '@mui/material';

const ErrorBanner = ({ error, onClose }) => {
  return (
    <Snackbar
      open={Boolean(error)}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <Alert 
        onClose={onClose} 
        severity="error" 
        variant="filled"
        sx={{ width: '100%' }}
      >
        {error}
      </Alert>
    </Snackbar>
  );
  // Why display error banner: Using Snackbar for non-intrusive notification that auto-dismisses
};

export default ErrorBanner;
