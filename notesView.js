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
    // try stringify'ing becofe the
    this.api.uploadNotes(this.input.value);
    this.input.value = '';
    this.displayNotes();
  }

  async displayNotes() {
    document.querySelectorAll('.note').forEach(element => element.remove());

    const serverData = await this.api.loadNotes();
    this.model.setNotes(serverData);

    const notes = this.model.getNotes();
    console.log(notes);

    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
  
    })
  }
}

module.exports = NotesView;