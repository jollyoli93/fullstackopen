import { useState } from 'react'

const Button = ({title, onClick}) => {
  console.log(onClick);
  return (
    <button onClick={onClick}>{title}</button>
  )
}

const Header = () => {
  return (
    <h1>give feedback</h1>)
}

const StatisticLine = ( {text, type} ) => {
  return ( 
    <>
      <p>{text} {type}</p>
    </>
  )
}

const Statistics = ( {good, neutral, bad} ) => {
  const all = good + neutral + bad;
  const average = (all / 3);
  const aveRounded = () => {
    if (percent % 10 === 0) {
        return (average).toFixed(0)
      } else {
        return (average).toFixed(1)
      }
    }

  const percent = (good/all)*100
  const positive = () => {
    if (percent % 10 === 0) {
        return (percent).toFixed(0) + "%"
      } else {
        return (percent).toFixed(1) + "%"
      }
    }

  return (
    <>
      <h1>statistics</h1>

      {all > 0 
        ? 
          <div>
            <StatisticLine text="good" type={good} />
            <StatisticLine text="neutral" type={neutral} />
            <StatisticLine text="bad" type={bad} />
            <StatisticLine text="all" type={all} />
            <StatisticLine text="average" type={aveRounded()} />
            <StatisticLine text="positive" type={positive()} />
          </div> 
        : 
          <p>feedback not given</p>      
      }
          
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
  }
  
  return (
    <div>
      <Header />
      <span>
        <Button title={"good"} onClick={handleGoodClick}/>
        <Button title={"neural"} onClick={handleNeutralClick}/>
        <Button title={"bad"} onClick={handleBadClick}/>
      </span>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App