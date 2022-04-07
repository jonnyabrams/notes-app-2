const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesAPI = require('./notesAPI');

const api = new NotesAPI;
const model = new NotesModel;
const view = new NotesView(model, api);


view.displayNotes();
