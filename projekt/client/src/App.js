import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Documantation from './Documantation';
import Fib from './Fib';
import Home from './Home';

function App() {
  return (
    
    <Router>
      <div className="App">
        <header>
       
        <br/>
        Menu:
        <un>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/fib">Fibbonaci</Link></li>
           <li><Link to="/doc">Documantation</Link></li>
        </un>
        </header>
        <div>
        
         <Route exact path="/" component={Home}/>
          <Route  path="/fib" component={Fib} />
          <Route path="/doc" component={Documantation} />
        </div>
      </div>
    </Router>
 
  );
}

export default App;
