// src/components/LoadingIndicator.jsx
import { CircularProgress, Box } from '@mui/material';

const LoadingIndicator = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingIndicator;
