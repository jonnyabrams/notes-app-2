class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.addNoteButton = document.querySelector('#add-note-button');
    this.input = document.querySelector('#add-note-input');

    this.addNoteButton.addEventListener('click', () => {
      this.addNewNote();
    });
  }

  addNewNote(newNote) {
    this.model.addNote(this.input.value);
    this.input.value = '';
    this.displayNotes();
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach(element => element.remove());

    const notes = this.model.getNotes();

    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }
}

module.exports = NotesView;