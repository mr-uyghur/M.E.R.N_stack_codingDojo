import { Router } from '@reach/router';
import React from 'react';
import NavBar from './components/NavBar'
import DashboardComponent from './components/DashboardComponent'
import Display from './components/Display'
import Home from './components/Home'

function App() {
  return (
    <center>
    <div className="App">
     
      <NavBar/>
      <Router>
        <Home path ="/home"/>
      <Display path="/:id" />
        <DashboardComponent path="/:str/:color/:background" />
      </Router>
    </div>
    </center>
  );
}

export default App;
