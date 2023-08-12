import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('React')
  const [address, setAddress] = useState('')

  const handleEventClick = (event) => {
    setName(address)
  }
  const handleOnChangeInput = (e) => {
    setAddress(e.target.value)
  }

  return (
    <div className="App">
       <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>HELLO WORLD WITH {name}</h2>
        <input type='text' value={address} onChange={e => handleOnChangeInput(e)}/>
        <button type='button' onClick={(event) => handleEventClick(event)}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
