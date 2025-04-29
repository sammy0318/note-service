// src/utils/storage.js
/**
 * Storage utility for notes persistence using localStorage
 */

const STORAGE_KEY = 'note-service-notes';

// Get all notes from localStorage
export const getNotes = () => {
  try {
    const notes = localStorage.getItem(STORAGE_KEY);
    return notes ? JSON.parse(notes) : [];
  } catch (error) {
    console.error('Failed to get notes from localStorage:', error);
    throw new Error('Could not retrieve notes. Storage may be corrupted.');
  }
};

// Save all notes to localStorage
export const saveNotes = (notes) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    return notes;
  } catch (error) {
    console.error('Failed to save notes to localStorage:', error);
    throw new Error('Could not save notes. Storage quota may be exceeded.');
  }
};

// Add a new note
export const addNote = (note) => {
  try {
    const notes = getNotes();
    const newNote = {
      ...note,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    
    const updatedNotes = [newNote, ...notes];
    saveNotes(updatedNotes);
    
    return newNote;
  } catch (error) {
    console.error('Failed to add note:', error);
    throw error;
  }
};

// Delete a note by id
export const deleteNote = (id) => {
  try {
    const notes = getNotes();
    const updatedNotes = notes.filter(note => note.id !== id);
    saveNotes(updatedNotes);
    return updatedNotes;
  } catch (error) {
    console.error('Failed to delete note:', error);
    throw error;
  }
};
