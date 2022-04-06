/**
 * @jest-environment jsdom
 */

 const fs = require('fs');

 const NotesModel = require('./notesModel');
 const NotesView = require('./notesView'); 

describe('NotesView', () => {
  document.body.innerHTML = fs.readFileSync('./index.html');
  const model = new NotesModel;
  const view = new NotesView(model);
  const input = document.querySelector('#add-note-input');
  const button = document.querySelector('#add-note-button');

  it('displays two notes', () => {
    model.addNote('yo');
    model.addNote('hey');
    view.displayNotes();
    expect(document.querySelectorAll('div.note').length).toEqual(2)
  });

  it('a user can add a note with text input', () => {
    input.value = 'Diego';
    button.click();
    expect(document.querySelectorAll('div.note').length).toEqual(3)
    expect(document.querySelectorAll('div.note')[2].innerText).toEqual('Diego');
  });

  it('clears the previous notes before displaying', () => {
    view.displayNotes();
    view.displayNotes();
    expect(document.querySelectorAll('div.note').length).toEqual(3);
  });

});