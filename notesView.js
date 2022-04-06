class NotesView {
  constructor(model, api) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.addNoteButton = document.querySelector('#add-note-button');
    this.input = document.querySelector('#add-note-input');
    this.api = api;

    this.addNoteButton.addEventListener('click', () => {
      this.addNewNote();
    });
  }

  addNewNote() {
    console.log('dkfj')
    console.log(this.input.value)
    console.log(JSON.stringify(this.input.value))
    this.api.uploadNotes(this.input.value);
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