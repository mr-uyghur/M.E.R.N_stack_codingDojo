  
import React from 'react';
import { Router,Link } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Details';
import Update from './views/Update';
import PersonForm from './components/PersonForm'
function App() {
  return (
    <div className="App">
      <center>
      <h1>Favorite authors </h1>
      
      <Router>
      <Main path="/"/>
        <Detail path="product/:id" />
        <Update path="author/:id/edit"/>
        <PersonForm path = "/new"/>
      </Router>
      </center>
    </div>
  );
}
export default App;