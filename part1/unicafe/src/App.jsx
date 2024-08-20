import { useState } from 'react'

const Button = ({title}) => {
  return (
    <button>{title}</button>
  )
}

const Header = () => {
  return (
    <h1>give feedback</h1>)
}

const Statistics = ( {good, neutral, bad} ) => {
  console.log(good)
  
  return (
    <>
      <h1>statistics</h1>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <Header />
      <span>
        <Button title={"good"}/>
        <Button title={"neural"}/>
        <Button title={"bad"}/>
      </span>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App