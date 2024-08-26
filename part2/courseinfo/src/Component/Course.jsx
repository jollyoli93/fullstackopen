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


export default Course