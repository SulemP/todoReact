import '../TodoCounter/TodoCounter.css'

function TodoCounter ( {todoTotal, todoCompletados} ){
    return (
        <div className='todo-counter'>
            <h2 className='counter-tittle'>Tus tareas</h2>
            <p>Has completado {todoCompletados} de {todoTotal} tareas</p>
        </div>
    )
}

export { TodoCounter };