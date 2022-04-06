const NotesAPI = require('./notesAPI');

require('jest-fetch-mock').enableMocks();

describe('notes API class', () => {
  it('calls fetch and loads repo info', async () => {
    const api = new NotesAPI;
    fetch.mockResponseOnce(JSON.stringify({
      0: ['This note is coming from the server']
    }))

    api.loadNotes((repoInfo) => {
      expect(repoInfo[0]).toStrictEqual(['This note is coming from the server'])
    })
  })

  it('creates a note from the backend', async () => {
    const api2 = new NotesAPI;
    
  })

})