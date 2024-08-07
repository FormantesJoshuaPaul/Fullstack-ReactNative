import { useState, useEffect } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  const [selectedMost, setSelectedMost] = useState(0)
  const [anecdoteMostVotes, setAnecdoteMostVotes] = useState(0)

  
  
  const updateGood = () =>{
    const currentGoodValue = good + 1
    setGood(currentGoodValue)
  }

  const updateNeutral = () =>{
    const currentNeutralValue = neutral + 1
    setNeutral(currentNeutralValue)
  }

  const updateBad = () =>{
    const currentBadValue = bad + 1
    setBad(currentBadValue)
  }

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

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const randomAnecdote = () => {
    const getRandom = getRandomInteger()
    //console.log(getRandom)
    setSelected(getRandom)
  }

  const getRandomInteger = () =>{
    const minCeiled = Math.ceil(0)
    const maxFloored = Math.floor(7)
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
  }


  const voteAnecdote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  useEffect(() => {
    console.log('Points updated:', points);
    getLargestAnecdoteVoted();
  }, [points]);

  const getLargestAnecdoteVoted = () => {
    let largest = points[0];
    for (let i = 0; i<points.length; i++)
    {
      if (points[i] >= largest)
      {
        largest = points[i]
        setAnecdoteMostVotes(i)
      }
    }
    console.log(largest)
    setSelectedMost(largest)
  }

  return (
    
    <div>
      <h1>give feedback</h1>
      <Button text = "Good" feedbackFunction = {updateGood}></Button>
      <Button text = "Neutral" feedbackFunction = {updateNeutral}></Button>
      <Button text = "Bad"feedbackFunction = {updateBad}></Button>
      

      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}></Statistics><br></br>

      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]} <br></br>
        total votes : {points[selected]} <br></br>
        <Button text = "next anecdote" feedbackFunction = {randomAnecdote} ></Button>
        <Button text = "vote" feedbackFunction = {voteAnecdote}></Button>
        <br></br>
        <h1>Anecdote with most votes</h1>
        {anecdotes[anecdoteMostVotes]}<br></br>
        number of votes: {selectedMost}
      </div>

    </div>
  )
}

//instead of making 3 separate components for 3 buttons, we refactor our code to only have 1 button component for all 3 buttons. we just have to change which functions are ran when calling the components in the main App component. //
const Button = (props) => {
  return (
    <div>
      <button onClick = {props.feedbackFunction}>{props.text}</button>
    </div>
  )
}

const Statistics = (props) => {
  if (props.good == 0 && props.neutral == 0 && props.bad == 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  const averageResult = (props.good + props.neutral + props.bad)/3 
  const total = props.good + props.neutral + props.bad
  const positiveResult = (props.good/total) + " %"
// here we also refactor our code so as to not hard code each variable into the div, but to create a component to represent each div by just using different variables to show their different values. //
  return (
    <div>
      <table>
        <tbody>
        <tr>
          <td><StatisticLine text = "good"></StatisticLine></td>
          <td><StatisticLine value = {props.good}></StatisticLine></td>
        </tr>
          
        <tr>
        <td><StatisticLine text = "neutral"></StatisticLine></td>
        <td><StatisticLine value = {props.neutral}></StatisticLine></td>
        </tr>

        <tr>
        <td><StatisticLine text = "bad"></StatisticLine></td>
        <td><StatisticLine value = {props.bad}></StatisticLine></td>
        </tr>

        <tr>
        <td><StatisticLine text = "average"></StatisticLine></td>
        <td><StatisticLine value = {averageResult}></StatisticLine></td>
        </tr>

        <tr>
        <td><StatisticLine text = "positive"></StatisticLine></td>
        <td><StatisticLine value = {positiveResult}></StatisticLine></td>
        </tr>
        </tbody>

      </table>

    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} {props.value} <br></br>
    </div>
  )
}


/* const GoodButton = (props) => {
  return (
    <div>
      <button onClick = {props.updateGood}>Good</button>
    </div>
  )
}

const NeutralButton = (props) => {
  return (
    <div>
      <button onClick = {props.updateNeutral}>Neutral</button>
    </div>
  )
}

const BadButton = (props) => {
  return (
    <div>
      <button onClick = {props.updateBad}>Bad</button>
    </div>
  )
} */

/* const DisplayAverage = (props) =>{
  

  return (
    <div>
      average {averageResult}
    </div>
  )
}

const DisplayPositive = (props) => {
  const total = props.good + props.neutral + props.bad
  const positiveResult = (props.good/total)

  return (
    <div>
      positive {positiveResult} %
    </div>
  )
} */



export default App