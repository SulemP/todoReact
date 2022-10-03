import '../NewTask/NewTask.css'
import tareaImg from '../asset/image/work.png';

function NewTask ( {createTodos, setCreateTodos, onCreate} ){

    const addTodos = (event) => {
        setCreateTodos(event.target.value)
        console.log(event.target.value)
    }

 

    return (
        <div className='task row'>
            <div className="newTask">
                <h2>Crea una nueva tarea</h2>
                <div className='task-name'>
                    <h4>Nombre de tarea</h4>
                    <input 
                        placeholder="Escribe una nueva tarea"
                        value={createTodos}
                        onChange = { addTodos }
                    />
                    <button type='submit' 
                        onClick = {onCreate}>
                        Crear tarea
                    </button>
                </div>
                <img src = {tareaImg} alt = "imagen decorativa"></img>
            </div>
        </div> 
    )
    
}

export { NewTask };