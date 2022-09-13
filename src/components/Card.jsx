

function Card(props){

    return(
        <div className="containerContact-card">
            {props.name} {props.lastName}
        </div>
    )
}

export default Card;