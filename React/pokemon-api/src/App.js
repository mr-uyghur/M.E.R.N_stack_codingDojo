import Example from './components/Example'
import Display from './components/Display'
import React,{ useState }  from 'react'
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([])
  return (
    <div className="App">
     
     {/* <Display pokemon={ pokemon } setPokemon={ setPokemon }/> */}
     <Example pokemon={ pokemon } setPokemon={ setPokemon }/>
    </div>
  );
}

export default App;
