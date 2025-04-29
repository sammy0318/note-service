// src/App.jsx
import { useState } from 'react';
import { CssBaseline, Box } from '@mui/material';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';
import Navigation from './components/Navigation';
import ErrorBanner from './components/ErrorBanner';
import { useNotes } from './hooks/useNotes';

function App() {
  const { notes, loading, saving, error, addNote, deleteNote, clearError } = useNotes();
  const [activeTab, setActiveTab] = useState(0);

  const handleAddNote = async (note) => {
    await addNote(note);
    setActiveTab(0); // Switch to notes list view after adding
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ 
        bgcolor: 'background.default', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <ErrorBanner error={error} onClose={clearError} />
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        <Box sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
          {activeTab === 0 ? (
            <NotesList
              notes={notes}
              loading={loading}
              onDeleteNote={deleteNote}
            />
          ) : (
            <AddNote
              onAddNote={handleAddNote}
              saving={saving}
            />
          )}
        </Box>
      </Box>
    </>
  );
}

export default App;
