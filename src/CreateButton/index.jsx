import '../CreateButton/CreateButton.css'

function CreateTodoButton (props){
    
/*Puedo envolver mi tarea en una función directamente en el evento, o puedo crear una variable en donde se realice la función y solo la mando a llamar en el evento.

const clickButton = ()=> {
    alert ("Aqui va el modal")
}
y ya solo mando mi variable clickButton en mi evento.*/


    const clickButton = (msg) => {
        alert(msg)
    }

    //Al hacerlo de esta forma, puedo ocupar la función clickButton varias veces, en el lugar que quier, y para eso, al llamar clickButton tengo que elvolverlo en otra función y dándole el valor del parámetro "msg".

    return(
        <button 
            className="agregar sombra" 
            type='submit'
            onClick={ () => clickButton('Aquí se abrirá un modal') } 
        >
            +
        </button>
    )
}

export {CreateTodoButton};