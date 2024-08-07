const Course = ({course}) => {
    //console.log({course})

    const totalExercises = course.parts.reduce((sum,subject) => {
        console.log(subject);
        return sum + subject.exercises;
      },0) 

    const subjectNames = (v) => {
        return v.parts.map((x) =>  (
            <div key = {x.id}>
                {x.name} {x.exercises} 
            </div>
        )) //we need to use () for the callback function in this case 
        // this is because if we use {}, we need to explicity write 'return' but with () we dont have to.
        // this also helps because there is already a return statement before the map function
        // meaning that if we use return in the callback, it may cause problems.
    }

    return (
        <div>
            <h2>{course.name}</h2> <br></br>
            {subjectNames(course)}
            <strong>total of {totalExercises} exercises</strong>
            <br></br>
        </div>
    )
  }
  
  export default Course