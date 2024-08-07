import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [persons,setPersons] = useState([])


  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }

  const getPersons = () => {
    console.log("getting persons data from database")
    axios
        .get('http://localhost:3001/persons')
        .then((response) => {
          console.log("promise fulfulled")
          setPersons(response.data)
        })
  }
  
  useEffect(getPersons, [])

  const notesToShow = showAll
  ? notes //if true set to notes
  : notes.filter(note => note.important === true)
  // if false filter notes shown
  // can also be written as notes.filter(note => note.important) ===true operator can be omitted as filter function has to check that condition is true either way. and note.important is either true or false only.

const handleNoteChange = (event) => {
  console.log(event.target.value)
  setNewNote(event.target.value)
}

const addNote = (event) => {
  event.preventDefault() //prevents reload of page
  const noteObject = {
    content: newNote,
    important: Math.random() < 0.5,

  }
  axios
    .post('http://localhost:3001/notes', noteObject)
    .then(response => {
      console.log(response)
      setNotes(notes.concat(response.data))
      setNewNote('')
    })
}

return (
  <div>
    <h1>Notes</h1>
    <div>
      <button onClick={() => setShowAll(!showAll)}> 
        {/*update showAll state value to opposite of what it is. so if it is true update to false and vice versa */}
        show {showAll ? 'important' : 'all' }
      </button>
      {/*update button text based on showAll state value. */}
    </div>
    <ul>
      {notesToShow.map(note =>
        <Note key={note.id} note={note}  />
      )}
    </ul>
    <form onSubmit={addNote}>
    <input value={newNote} onChange={handleNoteChange} />
      <button type="submit">save</button>
    </form> 
  </div>
)
  // ...
}

export default App