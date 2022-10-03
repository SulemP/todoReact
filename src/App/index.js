import React from "react";
import { AppUI } from "./AppUI";

const defaultTodos = [
  {text:'Escuchar musica', completed:false},
  {text:'Tomar cursos', completed:false},
  {text:'Llorar', completed:false}
]

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
    parsedTodos = []
  }
  else{
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [searchValue, setSearchValue] = React.useState ('')
  const [createTodos, setCreateTodos] = React.useState ('')
  const [todos, setTodos] = React.useState (parsedTodos)

  //Guardo cuantos todos tengo completos
  const completeTodos = todos.filter(todo => todo.completed).length
  //Guardo la cantidad de todos que tengo
  const totalTodos = todos.length


  //Aquí está el filtro para buscar las tareas por letras o palabras.

  let searchedTodo = []

  if (searchValue.length === 0){
    searchedTodo = todos
  }
  else{
    searchedTodo = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
    
  }

  //Almacenar valores en el localStorage
  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos)
    localStorage.setItem('TODOS_V1', stringifiedTodos)
    setTodos(newTodos)
  }

  //Creo mis todos
  
  const saveDataTodo = ()=> {
    let newTodos =[...todos] //[{}{}{}{new}]
    newTodos.push({
      text: createTodos, completed: false
    })
    
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  //Completar todo's.

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  //Eliminar todos.

  const deteleTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    //newTodos[todoIndex].completed = newTodos-1
    newTodos.splice(todoIndex,1) //splice se usa para cambiar el contenido de una matriz, agregando nuevos elementos y eliminando elementos antiguos. Primero de indica la posición en la que empezará, seguido de cuantos elementos se van a eliminar y por último la cantidad de los que se van a agregar.
    saveTodos(newTodos)
  }



  return (
    <AppUI 
      totalTodos = {totalTodos}
      completeTodos = {completeTodos}
      searchValue={searchValue} //En el primero asigno el nombre que yo quiera y el segundo es el valor que estoy mandando, en este caso son los que estan en la constante.
      setSearchValue={setSearchValue}
      searchedTodo = {searchedTodo}
      createTodos = {createTodos} 
      setCreateTodos = {setCreateTodos}
      toggleCompleteTodo = {toggleCompleteTodo}
      deteleTodo = {deteleTodo}
      saveDataTodo = {saveDataTodo}
    />
  )
}

export default App;