// src/components/Navigation.jsx
import { Paper, Tabs, Tab, Box } from '@mui/material';
import { Create as CreateIcon, ViewList as ViewListIcon } from '@mui/icons-material';

const Navigation = ({ activeTab, onTabChange }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Paper square elevation={1} sx={{ position: 'sticky', top: 0, zIndex: 10 }}>
        <Tabs
          value={activeTab}
          onChange={(e, newValue) => onTabChange(newValue)}
          indicatorColor="primary"
          textColor="primary"
          centered
          variant="fullWidth"
        >
          <Tab icon={<ViewListIcon />} label="VIEW NOTES" iconPosition="start" />
          <Tab icon={<CreateIcon />} label="ADD NOTE" iconPosition="start" />
        </Tabs>
      </Paper>
    </Box>
  );
  // Why this nav approach for simplicity: Tab-based navigation provides clear visual indication of current view without complex routing
};

export default Navigation;