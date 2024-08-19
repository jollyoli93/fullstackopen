const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Part = ( {part} ) => {
    return (
      <>
        <p>{part[0].name} {part[0].exercises}</p>
        <p>{part[1].name} {part[1].exercises}</p>
        <p>{part[2].name} {part[2].exercises}</p>
      </>
    )
  }

  const Header = ( {course} ) => {
    return (
      <>
        <h1>{course}</h1>
      </>
    )
  }

  const Content = ({part}) => {
    return (
      <div>
        <Part part={part}/>
      </div>
    )
  }

  const Total = ( {part} ) => {
    return (
      <>
        <p>Number of exercises {part[0].exercises + part[1].exercises + part[2].exercises}</p>
      </>
    )
  }


  return (
    <div>
        <Header course={course} />
        <Content part={[part1, part2, part3]}/>
        <Total part={[part1, part2, part3]}/>
    </div>
  )
}

export default App


