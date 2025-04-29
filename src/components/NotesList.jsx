import { Box, Typography, Container } from '@mui/material';
import NoteItem from './NoteItem';
import LoadingIndicator from './LoadingIndicator';

const NotesList = ({ notes, loading, onDeleteNote }) => {
  if (loading) {
    return <LoadingIndicator />;
  }

  // Sort notes by scheduledFor date (most recent first)
  const sortedNotes = [...notes].sort((a, b) => {
    const dateA = a.scheduledFor ? new Date(a.scheduledFor) : new Date(a.createdAt);
    const dateB = b.scheduledFor ? new Date(b.scheduledFor) : new Date(b.createdAt);
    return dateB - dateA;
  });

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
        My Notes
      </Typography>
      
      {notes.length === 0 ? (
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            height: '200px',
            backgroundColor: 'background.paper',
            borderRadius: 2,
            p: 3,
          }}
        >
          <Typography variant="body1" color="text.secondary">
            No notes yet. Create your first note!
          </Typography>
        </Box>
      ) : (
        <Box>
          {sortedNotes.map(note => (
            <NoteItem 
              key={note.id} 
              note={note} 
              onDelete={onDeleteNote} 
            />
          ))}
        </Box>
      )}
    </Container>
  );
  // Why useEffect to sync storage → state: implemented in useNotes hook
};

export default NotesList;