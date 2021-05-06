import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

class App extends Component {
render() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header">
      <Header></Header>
      </div>
      
      <div className='About'>
        <About></About>
      </div>

      <div className='Portfolio'>
        <Portfolio></Portfolio>
      </div>
      
      <div className='contact'>
        <Contact></Contact>
      </div>
    </div>
  );
}
}
export default App;
