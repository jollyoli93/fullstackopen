const Header = ({ name }) => <h1>{name}</h1>

const Part = ( {name, exercises} ) => {
  return <p>{name} {exercises}</p>
}

const Total = ( {parts} ) => {
  const sum = parts.reduce((sum, part) => { 
    return (sum + part.exercises)
  }, 0)

  return <b>total of {sum} exercises</b>
}

const Content = ({ parts }) => {

  return (
    <>
      {parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises} /> )}
      <Total parts={parts}/>
    </>
  )
}
    
  const Course = ( { courses } ) => {
  return (
    <>
      {courses.map((course) =>
        <div key={course.id}>
          <Header name={course.name}/>
          <Content parts={course.parts}/>
        </div>
      )}
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

export default App