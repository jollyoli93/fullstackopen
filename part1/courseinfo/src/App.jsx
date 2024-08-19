const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Part = ( {name, number } ) => {
    return (
      <p>{name} {number}</p>
    )
  }

  const Header = ( {course} ) => {
    return (
      <>
        <h1>{course}</h1>
      </>
    )
  }

  const Content = ({part, exercises }) => {
    return (
      <div>
        <Part name={part[0]} number={exercises[0]}/>
        <Part name={part[1]} number={exercises[1]}/>
        <Part name={part[2]} number={exercises[2]}/>
      </div>
    )
  }

  const Total = ( {exercises} ) => {
    return (
      <>
        <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
      </>
    )
  }


  return (
    <div>
        <Header course={course} />
        <Content part={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]}/>
        <Total exercises={[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

export default App


