const NotesAPI = require('./notesAPI');

require('jest-fetch-mock').enableMocks();

describe('notes API class', () => {
  it('calls fetch and loads repo info', async () => {
    const api = new NotesAPI;
    fetch.mockResponseOnce(JSON.stringify({ "note": 'This note is coming from the server' }))

    const serverResponse = await api.loadNotes()
    expect(serverResponse.note).toEqual('This note is coming from the server')
  })

  it.skip('creates a note from the backend', async () => {
    const api2 = new NotesAPI;
    
  })

})