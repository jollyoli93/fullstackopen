import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
        
  }

  const handleNameChange = (event) => {
    console.log(event.target.value); 
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onClick={addName}>
        <div>
          name: <input 
                  value={newName}
                  onClick={handleNameChange}
                />
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit" onClick={handleNameChange}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App