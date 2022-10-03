import '../TodoList/TodoList.css'

function TodoList(props) {
    return (
        <section className="todo-list">
            <ul>
                {props.children}
            </ul>  
        </section>
    )
}

export { TodoList };