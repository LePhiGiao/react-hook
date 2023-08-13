
const Todo = (props) => {

    const { todos, title, handleDeleteTodo } = props
    
    const handleDelete = id => {
        handleDeleteTodo(id)
    }

    return (
        <div className='todos-container'>
            <div className="title">{title}</div>
            {todos.map((todo, index) => {
                return (
                    <div key={todo.id}>
                        <li className='todos-children'>
                            {todo.title} 
                            &nbsp; <span onClick={() => handleDelete(todo.id)}>x</span>
                        </li>
                    </div>
                )
            })}
            <hr/>
        </div>
    )
}

export default Todo