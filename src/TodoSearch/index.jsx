import '../TodoSearch/TodoSearch.css'

function TodoSearch ( {searchValue, setSearchValue} ){

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
        console.log(event.target.value)
    }

    return (
        <div>
            <input 
                className="search sombra" 
                placeholder = 'Buscar tarea'
                value = {searchValue}
                onChange = {onSearchValueChange}
            />
            <p>
                {searchValue}
            </p>
        </div>
    )
}

export {TodoSearch};