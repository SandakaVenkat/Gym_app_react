import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import Feature from './components/Feature.jsx';
import Offer from './components/Offer.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <Feature/>
      <Offer />
      <About />
      <Contact/>
    </div>
  );
}

export default App;
