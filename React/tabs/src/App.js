import Tabs from './components/Tabs'
import './App.css';

function App() {
  return (
    <div className="App">
    <Tabs tabItems = {[{header:'tab1', content :'tab1 content is showing here'},
  {header:'tab2', content :'tab2 content is showing here'},
  {header:'tab3', content :'tab3 content is showing here'},
  ]}/>
    </div>
  );
}

export default App;
