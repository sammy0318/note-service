import { useState } from 'react';
import { 
  Container, 
  TextField, 
  Button, 
  Typography, 
  Paper, 
  Box,
  CircularProgress,
  Grid,
  FormControl,
  FormHelperText
} from '@mui/material';
import { Save as SaveIcon, Event as EventIcon, AccessTime as AccessTimeIcon } from '@mui/icons-material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';

const AddNote = ({ onAddNote, saving }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [noteDate, setNoteDate] = useState(new Date());
  const [noteTime, setNoteTime] = useState(new Date());
  const [titleError, setTitleError] = useState('');
  const [contentError, setContentError] = useState('');
  const [dateError, setDateError] = useState('');

  const validateForm = () => {
    let isValid = true;
    
    if (!title.trim()) {
      setTitleError('Title is required');
      isValid = false;
    } else {
      setTitleError('');
    }
    
    if (!content.trim()) {
      setContentError('Content is required');
      isValid = false;
    } else {
      setContentError('');
    }
    
    if (!noteDate) {
      setDateError('Date is required');
      isValid = false;
    } else {
      setDateError('');
    }
    
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        // Combine date and time
        const combinedDateTime = new Date(noteDate);
        combinedDateTime.setHours(noteTime.getHours());
        combinedDateTime.setMinutes(noteTime.getMinutes());
        
        await onAddNote({ 
          title, 
          content,
          scheduledFor: combinedDateTime.toISOString()
        });
        
        // Reset form
        setTitle('');
        setContent('');
        setNoteDate(new Date());
        setNoteTime(new Date());
      } catch (error) {
        // Error is handled by the useNotes hook
        console.error('Failed to add note:', error);
      }
    }
  };
  // Why I chose useState + this submit handler: Each field needs to be controlled for validation and reset after submission

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="md" sx={{ py: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
          Add New Note
        </Typography>
        
        <Paper elevation={0} sx={{ p: 3 }}>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              margin="normal"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              error={Boolean(titleError)}
              helperText={titleError}
              disabled={saving}
            />
            
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={Boolean(dateError)}>
                  <DatePicker
                    label="Date"
                    value={noteDate}
                    onChange={(newDate) => setNoteDate(newDate)}
                    disabled={saving}
                    slotProps={{
                      textField: {
                        variant: 'outlined',
                        fullWidth: true,
                        error: Boolean(dateError),
                        InputProps: {
                          startAdornment: <EventIcon color="action" sx={{ mr: 1 }} />
                        }
                      }
                    }}
                  />
                  {dateError && <FormHelperText>{dateError}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TimePicker
                  label="Time"
                  value={noteTime}
                  onChange={(newTime) => setNoteTime(newTime)}
                  disabled={saving}
                  slotProps={{
                    textField: {
                      variant: 'outlined',
                      fullWidth: true,
                      InputProps: {
                        startAdornment: <AccessTimeIcon color="action" sx={{ mr: 1 }} />
                      }
                    }
                  }}
                />
              </Grid>
            </Grid>
            
            <TextField
              label="Content"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              margin="normal"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              error={Boolean(contentError)}
              helperText={contentError}
              disabled={saving}
              sx={{ mt: 2 }}
            />
            
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              startIcon={saving ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
              disabled={saving}
              sx={{ mt: 2 }}
            >
              {saving ? 'Saving...' : 'Save Note'}
            </Button>
            {/* Why show spinner here: Providing immediate feedback on save action without blocking the UI */}
          </Box>
        </Paper>
      </Container>
    </LocalizationProvider>
  );
};

export default AddNote;