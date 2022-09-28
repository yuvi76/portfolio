import React, { Component } from 'react';
import AppNavbar from './components/AppNavBar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './css/fontawesome.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <>
            <AppNavbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio/home" element={<Home />} />
              <Route path="/portfolio/about" element={<About />} />
              <Route path="/portfolio/work" element={<Work />} />
              <Route path="/portfolio/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
