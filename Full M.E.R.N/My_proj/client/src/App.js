import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <center>
      
      <Router>
      <Main path="/"/>
        <Detail path="product/:id" />
        <Update path="product/:id/edit"/>
      </Router>
      </center>
    </div>
  );
}
export default App;
