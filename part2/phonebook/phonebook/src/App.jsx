import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number : '040-1234567'
     }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setFilter] = useState('');

  const addDetails = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already in the phonebook`)
    } else {
      setPersons(persons.concat({name:newName, number:newNumber}))
    }
    setNewName('');
    }

  const applyFilter = (input) => {
    input.filter()
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <div>Filter: 
          <input 
            value={newFilter}
            onChange={handleFilter}
          />
      </div>
      <h2>Add a new contact</h2>
      <form onSubmit={addDetails}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameChange}
                />
        </div>
        <div>
          number: <input 
                  value={newNumber}
                  onChange={handleNumberChange}
                />
        </div>
        <div>
          { (newName !== '' & newNumber !== '') ?
            <button type="submit">add</button>  :
            <p> enter details</p>
        }

        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}: {person.number}</p>)}
    </div>
  )
}

export default App