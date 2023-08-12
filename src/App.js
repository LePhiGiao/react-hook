import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';

function App() {
  const [name, setName] = useState('React')
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    {id: 'todo1', title: 'Learn React', type: 'F8'},
    {id: 'todo2', title: 'Learn NodeJs', type: 'F8'},
    {id: 'todo3', title: 'Learn HTML', type: 'HoiDanIT'},
    {id: 'todo4', title: 'Learn CSS', type: 'HoiDanIT'},
  ])

  const handleEventClick = (event) => {
    setName('REACT')
    if (!address) {
      alert('empty input')
      return;
    }
    let todo = { id: Math.floor(Math.random() *10 ), title: address, type: 'HoiDanIT' }
    setTodos([...todos, todo])
    setAddress('')
  }
  const handleOnChangeInput = (e) => {
    setAddress(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h2>HELLO WORLD WITH {name}</h2>
        <Todo todos={todos} title='All todo'/>
        <Todo todos={todos.filter(item => item.type === 'F8')} title='Learn F8'/>
        <input type='text' value={address} onChange={e => handleOnChangeInput(e)}/>
        <button type='button' onClick={(event) => handleEventClick(event)}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
