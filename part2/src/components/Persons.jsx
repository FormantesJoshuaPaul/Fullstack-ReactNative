const Persons = (props) => {
    return (
        <div>
            {props.persons.map((x) => {
                return <div key = {x.name}>
                    {x.name} {x.number}
                </div>
            })}
        </div>
    )
}

export default Persons