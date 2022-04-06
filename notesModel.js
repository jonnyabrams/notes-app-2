class NotesModel {
  constructor() {
    this.notes = []
  }

  getNotes() {
    return this.notes;
  }

  addNote(note) {
    this.notes.push(note);
  }

  reset() {
    this.notes = [];
  }

  setNotes(note) {
    this.notes.push(note);
    console.log(this.notes)
  }
}

module.exports = NotesModel;