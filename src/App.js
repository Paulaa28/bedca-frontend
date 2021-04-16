import {useState} from 'react';
import bedcaApi from './services/bedcaApi'
import logo from './logo.svg';
import './App.css';

const getFood = async () => {
  const food = await bedcaApi.get('food')
  return food
}

function App() {
  const [food, setFood] = useState([])
  console.log({bedcaApi})
  console.log(getFood())
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
