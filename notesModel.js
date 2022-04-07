class NotesModel {
  constructor() {
    this.notes = []
  }

  getNotes() {
    return this.notes;
  }

  // addNote(note) {
  //   this.notes.push(note);
  // }

  reset() {
    this.notes = [];
  }

  setNotes(note) {
    this.notes = note; // Check whether the push is doing the right behaviour
  }
}

module.exports = NotesModel;