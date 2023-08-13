import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';

function App() {
  const [name, setName] = useState('React')
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    {id: 'todo1', title: 'Learn React', type: 'F8'},
    {id: 'todo2', title: 'Learn NodeJs', type: 'F8'},
    {id: 'todo3', title: 'Learn HTML', type: 'HoiDanIT'},
    {id: 'todo4', title: 'Learn CSS', type: 'HoiDanIT'},
  ])

  useEffect(() => {
    console.log('>>>>> check UseEffect')
  }, [address])

  const handleEventClick = (event) => {
    setName('REACT')
    if (!address) {
      alert('empty input')
      return;
    }
    let todo = { id: Math.floor(Math.random() *1000 ), title: address, type: 'HoiDanIT' }
    setTodos([...todos, todo])
    setAddress('')
  }
  const handleOnChangeInput = (e) => {
    setAddress(e.target.value)
  }
  const handleDeleteTodo = id => {
    let newTodos = todos
    newTodos = newTodos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
 
  return (
    <div className="App">
      {console.log('>>>>check Return')}
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h2>HELLO WORLD WITH {name}</h2>
        <Covid />
        <Todo 
          todos={todos} 
          title='All todo'
          handleDeleteTodo={handleDeleteTodo}
        />
        <input type='text' value={address} onChange={e => handleOnChangeInput(e)}/>
        <button type='button' onClick={(event) => handleEventClick(event)}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
