class NotesAPI {

  async loadNotes() {
    const response = await fetch('http://localhost:3000/notes')
    return response.json()
    // .then(data => callback(data));
    // 
  }

  uploadNotes(data) {
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "content": data }),
    })
  }

}

module.exports = NotesAPI;