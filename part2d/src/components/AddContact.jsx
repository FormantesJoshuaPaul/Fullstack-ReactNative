const AddContact= (props) => {
    return (
        <form>
        <div>
          name: <input value = {props.newName} onChange = {props.handleOnChange} />
        </div>
        <div>number: <input value = {props.newNumber} onChange = {props.handleOnChangeNumber}/></div>
        <div>
          <button onClick = {props.handleOnClick}type="submit">add</button>
        </div>
      </form>
    )
}


export default AddContact