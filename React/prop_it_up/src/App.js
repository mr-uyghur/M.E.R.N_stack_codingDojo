
import './App.css';
import MyApp from './components/MyApp'

function App() {
  return (
    <div className="App">
     <MyApp name = "Dan, Jane" age = "45" hairColor = "Black"/>
     <MyApp name = "Smith, Jogn" age = "88" hairColor = "Brown"/>
     <MyApp name = "Fillmore, Millard" age = "50" hairColor = "Brown"/>
     <MyApp name = "Smith, Maria" age = "62" hairColor = "Brown"/>
    
    </div>
  );
}

export default App;
