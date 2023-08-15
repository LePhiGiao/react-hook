import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import Timer from './views/Timer';
import Blog from './views/Blog';
import DetailBlog from './views/DetailBlog';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Learn React', type: 'F8' },
    { id: 'todo2', title: 'Learn NodeJs', type: 'F8' },
    { id: 'todo3', title: 'Learn HTML', type: 'HoiDanIT' },
    { id: 'todo4', title: 'Learn CSS', type: 'HoiDanIT' },
  ])

  useEffect(() => {
    console.log('>>>>> check UseEffect')
  }, [address])

  const handleEventClick = (event) => {
    if (!address) {
      alert('empty input')
      return;
    }
    let todo = { id: Math.floor(Math.random() * 1000), title: address, type: 'HoiDanIT' }
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
    <BrowserRouter>
      <div className="App">
        {console.log('>>>>check Return')}
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />


          <Routes>
            <Route path='/' exact element={<Covid />} />
            <Route path='/timer' element={<Timer />} />
            <Route path='/todo' element={
              (
                <>
                  <Todo
                    todos={todos}
                    title='All todo'
                    handleDeleteTodo={handleDeleteTodo}
                  />
                  <input type='text' value={address} onChange={e => handleOnChangeInput(e)} />
                  <button type='button' onClick={(event) => handleEventClick(event)}>Click me!</button>
                </>
              )
            } />
            <Route path='/blog' exact element={<Blog />} />
            <Route path='/blog/:id' element={<DetailBlog />} />
          </Routes>
        </header>


      </div>
    </BrowserRouter>
  );
}

export default App;
