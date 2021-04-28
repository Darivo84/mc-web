import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Api from './pages/Api';
import Medical from './pages/Medical';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/api-docs" exact component={Api} />
          <Route path="/medical" exact component={Medical} />
          <Route path="/services" exact component={Services} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
