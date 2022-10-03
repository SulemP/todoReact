import React from 'react'

import { TodoCounter } from '../TodoCounter'; /*El primero es el nombre de mi componente y el segundo el nombre de mi archivo.*/
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItems";
import { NewTask } from "../NewTask";
import { CreateTodoButton } from "../CreateButton";

function AppUI ({ //Aqui estoy listando todas las props
    totalTodos,
    completeTodos,
    searchValue,
    setSearchValue,
    searchedTodo,
    createTodos,
    setCreateTodos,
    toggleCompleteTodo,
    deteleTodo,
    saveDataTodo
}) {

    return(
        <React.Fragment>  

            <div className="contenedor-general">

                <div className="div-task">
                    <NewTask 
                        createTodos={createTodos}
                        setCreateTodos={setCreateTodos}
                        onCreate = { ()=> saveDataTodo()}

                    />
                </div>
            
                <div className="your-task">
                    <TodoCounter 
                        todoTotal = {totalTodos}
                        todoCompletados = {completeTodos}
                    />
        
                    <TodoSearch 
                        searchValue={searchValue} //En el primero asigno el nombre que yo quiera y el segundo es el valor que estoy mandando, en este caso son los que estan en la constante.
                        setSearchValue={setSearchValue}
                    />

                    <TodoList>
                        {searchedTodo.map(todo => (
                            <TodoItem 
                                key = {todo.text} 
                                text = {todo.text}
                                completed = {todo.completed}
                                onComplete = { () => toggleCompleteTodo(todo.text)} 
                                onDelete = { ()=> deteleTodo(todo.text)}                 
                            /> // Cuando renderizamos elementos en una lista, tenemos que enviar la propiedad key a nuestros componentes.
                        ))}
                    </TodoList>

                    <CreateTodoButton />

                </div>

            </div>
    
    </React.Fragment>
    )
}

export { AppUI }