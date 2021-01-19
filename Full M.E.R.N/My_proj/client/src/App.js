import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
function App() {
  return (
    <div className="App">
      <center>
      
      <Router>
      <Main path="/"/>
        <Detail path="people/:id" />
      </Router>
      </center>
    </div>
  );
}
export default App;
