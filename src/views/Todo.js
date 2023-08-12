
const Todo = (props) => {
    console.log('>>>>> check props', props)
    const todos = props.todos
    return (
        <div className='todos-container'>
            <div className="title">
                {props.title}
            </div>
            {todos.map((todo, index) => {
                return (
                    <li key={todo.id} className='todos-children'>{todo.title}</li>
                )
            })}
            <hr/>
        </div>
    )
}

export default Todo