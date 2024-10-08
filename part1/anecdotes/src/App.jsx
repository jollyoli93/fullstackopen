import { useState } from 'react'

const Button = ( {onClick, text} ) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const NextAnecdoeButton = ( {onClick} ) => {
  return <Button onClick={onClick} text={"next anecdote"}/>
}

const VoteButton = ( {onClick} ) => {
  return <Button onClick={onClick} text={"vote"} />
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0});
  console.log(selected, votes)

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const handleAnecdoteClick = () => {
    let randint = Math.floor(Math.random() * anecdotes.length)
    setSelected((current) => current = randint)
    // console.log(selected, randint)
  }

  const handleVoteClick = () => {
    console.log("votes", selected, votes[selected])
    
    setVotes( (preVotes) =>
        ({...preVotes,
          [selected] : preVotes[selected] + 1
        })
    )
  }

  const mostVotes = () => {
    // Find the key with the maximum votes
    const top = Object.keys(votes).reduce((a, b) => (votes[a] > votes[b] ? a : b));
  
    // Check if the maximum votes count is 0
    if (votes[top] === 0) {
      return null;
    } else {
      return top; 
    }
  };
  

  const top = mostVotes()
  console.log("top", top)
  
  return (
    <div>
      <h2>Anectode of the day</h2>
      <div>{anecdotes[selected]}</div>
      <span>
        <VoteButton onClick={handleVoteClick}/>
        <NextAnecdoeButton onClick={handleAnecdoteClick}/>
      </span>
      <h2>Anecdote with most votes</h2>
      {top !== null ? (
        <div>
          <div>{anecdotes[top]} has {votes[top]} votes</div>
        </div>) :
        <div>
          No votes
        </div>
        }
    </div>
  )
}

export default App