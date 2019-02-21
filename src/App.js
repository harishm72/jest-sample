import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import './styles/App.css'
import Signup from './signup';
import Signin from './signin';
import Dashboard from './dashboard';
import Todo from './todo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Signup}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/todos" component={Todo}/>
        </div>
      </Router>
    );
  }
}

export default App;
