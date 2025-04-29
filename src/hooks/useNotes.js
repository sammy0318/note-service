// src/hooks/useNotes.js
import { useState, useEffect } from 'react';
import { getNotes, saveNotes, addNote as addNoteToStorage, deleteNote as deleteNoteFromStorage } from '../utils/storage';

/**
 * Custom hook for managing notes state and localStorage sync
 */
export const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  // Load notes from localStorage on mount
  useEffect(() => {
    const loadNotes = async () => {
      try {
        setLoading(true);
        const storedNotes = getNotes();
        setNotes(storedNotes);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadNotes();
  }, []); // Why useEffect to sync storage → state: We need to load notes when component mounts and keep UI in sync with storage

  // Add a new note
  const addNote = async (note) => {
    try {
      setSaving(true);
      const newNote = addNoteToStorage(note);
      setNotes(prevNotes => [newNote, ...prevNotes]);
      setError(null);
      return newNote;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setSaving(false);
    }
  };

  // Delete a note
  const deleteNote = async (id) => {
    try {
      setSaving(true);
      const updatedNotes = deleteNoteFromStorage(id);
      setNotes(updatedNotes);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return {
    notes,
    loading,
    saving,
    error,
    addNote,
    deleteNote,
    clearError: () => setError(null),
  };
};
