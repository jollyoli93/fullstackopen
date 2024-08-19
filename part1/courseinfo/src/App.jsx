const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
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
        <Header course={course.name} />
        <Content part={course.parts}/>
        <Total part={course.parts}/>
    </div>
  )
}

export default App


