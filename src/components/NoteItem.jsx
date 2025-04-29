import { useState } from 'react';
import { Card, CardContent, CardActions, Typography, IconButton, Collapse, Box, Chip, Stack } from '@mui/material';
import { Delete as DeleteIcon, ExpandMore as ExpandMoreIcon, Event as EventIcon, AccessTime as AccessTimeIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Custom styled expand icon
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const NoteItem = ({ note, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const { id, title, content, createdAt, scheduledFor } = note;
  
  // Format date and time
  const dateToUse = scheduledFor || createdAt;
  const dateObj = new Date(dateToUse);
  
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  
  const formattedTime = dateObj.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <Chip 
            icon={<EventIcon />}
            label={formattedDate} 
            size="small" 
            variant="outlined"
            sx={{ fontSize: '0.7rem' }}
          />
          <Chip 
            icon={<AccessTimeIcon />}
            label={formattedTime} 
            size="small" 
            variant="outlined"
            sx={{ fontSize: '0.7rem' }}
          />
          {scheduledFor && (
            <Chip 
              label="Scheduled" 
              size="small" 
              color="primary"
              variant="outlined"
              sx={{ fontSize: '0.7rem' }}
            />
          )}
        </Stack>

        <Typography variant="body2" color="text.secondary" noWrap={!expanded}>
          {!expanded ? `${content.substring(0, 100)}${content.length > 100 ? '...' : ''}` : null}
        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        <IconButton 
          aria-label="delete"
          onClick={() => onDelete(id)}
        >
          <DeleteIcon />
        </IconButton>
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{content}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default NoteItem;