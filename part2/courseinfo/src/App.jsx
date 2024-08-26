const Header = ({ name }) => <h1>{name}</h1>

const Part = ( {name, exercises} ) => {
  return <p>{name} {exercises}</p>
}

const Total = ( {parts} ) => {
  const sum = parts.reduce((sum, part) => { 
    return (sum + part.exercises)
  }, 0)

  return <bold>total of {sum} exercises</bold>
}

const Content = ({ parts }) => {

  return (
    <>
      {parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises} /> )}
      <Total parts={parts}/>
    </>
  )
}
    
  const Course = ( { course } ) => {
  const {name, parts} = course
 
  return (
    <div>
      <Header name={name}/>
      <Content parts={parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
  }

  return <Course course={course} />
}

export default App