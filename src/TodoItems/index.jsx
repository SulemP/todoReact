import '../TodoItems/TodoItem.css'

function TodoItem(props) {

    return (

        <li className="todo-item">
            <span>
                <div 
                    className= {`marcador ${props.completed && 'marcador-active'}`}
                    onClick = { props.onComplete }>
                </div>
            </span>

            <p 
                className= {`tarea ${props.completed && 'tarea-active'}`}
            >
                {props.text}
            </p>

            <span 
                className="borrar"
                onClick = { props.onDelete }
            >
                X
            </span>
        </li>
    
    )
}

export {TodoItem};