import React, { Component } from 'react';
import AppNavbar from './components/AppNavBar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import './css/fontawesome.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <AppNavbar />
              <Route path="/" render={() => (<Redirect to="/portfolio/home" />)} />
              <Route path="/portfolio/home" render={props => <Home key={Date.now()} {...props} />} />
              <Route path="/portfolio/about" render={props => <About key={Date.now()} {...props} />} />
              <Route path="/portfolio/work" render={props => <Work key={Date.now()} {...props} />} />
              <Route path="/portfolio/contact" render={props => <Contact key={Date.now()} {...props} />} />
            <Footer />
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
