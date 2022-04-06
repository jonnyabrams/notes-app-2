const NotesModel = require('./notesModel');

describe('NotesModel', () => {
  const notes = new NotesModel();
  it('starts as an empty array', () => {
    expect(notes.getNotes()).toEqual([]);
  });

  it('can add a note', () => {
    notes.addNote('eat pizza');
    expect(notes.getNotes()).toEqual(['eat pizza']);
  });

  it('can add more than one note', () => {
    notes.addNote('recycle the box');
    expect(notes.getNotes()).toEqual(['eat pizza', 'recycle the box']);
  });

  it('can reset the notes', () => {
    notes.reset()
    expect(notes.getNotes()).toEqual([]);
  });
});