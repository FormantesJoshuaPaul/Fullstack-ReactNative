const Filter = (props) => {

  const handleDisplayContent = () => {
    const displayArr = []
    for (let i=0; i<props.persons.length; i++)
    {
      if (props.persons[i].name.toLowerCase().includes(props.filteredName.toLowerCase())) //both persons.name and filteredName have to be set to lower case first, so that the search function is case insensitive.
      {
        displayArr.push(props.persons[i])
        console.log(displayArr)
      }else
      {
        console.log(`${props.persons[i].name} did not contain ${props.filteredName}`)
      }
    }
    return displayArr.map((x) => (
      <div key = {x.name}>
        {x.name} {x.number}
      </div>
    )) //i had alot of trouble with this, in order to display the result of the displayArr, we have to map the array. each index of the array will display a new element in the webpage. previously we have written return <div key = "persons.name">{persons.name} {persons.number} </div>

    // this is obviously wrong as number 1: what are u actually returning? if we examine what we written, it actually returns nothing as there is no index number to even reference the persons.name. number2: even if we were to add the index number so, persons[i].name, it would say that i is not declared and if we did declare it it would only return 1 object data.

    // need to look into how to return .map result in vanilla JS way/context. using for loop.

    //also, if no text is in the text box, all contacts is shown aswell.
  }

  {/* jsx elements that u return have to be encapsulated with a parent element, so a div or some element tag has to enclose the whole thing. */}
  return (
    <div>
      <div>
            filter shown with: <input value = {props.filteredName} onChange = {props.handleOnChangeFilter} /> 
      </div>
      <div>
        <br></br>
        {handleDisplayContent()}
      </div>
    </div>
  )
}

export default Filter