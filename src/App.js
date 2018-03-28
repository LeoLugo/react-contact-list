import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Contactlist from './Contactlist.js'
import Detailsview from './Detailsview.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Route exact path="/" component={Contactlist} />
          <Route exact path="/contact/:id" component={Detailsview} />
        </div>
      </Router>
    );
  }
}

export default App;
