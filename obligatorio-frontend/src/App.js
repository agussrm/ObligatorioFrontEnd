import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import Equipo from './components/Equipo'
import SignUp from './components/SignUp'
import Campeonato from './components/Campeonato'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {connect} from 'react-redux'



class App extends Component {

  render(){

    return  (<Router>
      <div>
        <ul className="Menu"> 
          <li>
            <Link to="/Equipo">Equipo</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/SignUp">SignUp</Link>
          </li>
          <li>
            <Link to="/Campeonato">Campeonato</Link>
          </li>
        </ul>
        <hr />

        <Route path="/Equipo" component={Equipo} />
        <Route path="/login" component={Login} /> 
        <Route path="/SignUp" component={SignUp} /> 
        <Route path="/Campeonato" component={Campeonato} /> 
      </div>
    </Router>
  );
  }
}

export default App;
