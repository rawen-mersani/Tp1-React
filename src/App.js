import React from 'react';
import './components/bootstrap.css';
import './components/style.css';
import Header from './components/header.js';
import Navigation from './components/navigation.js';
import Section from './components/section.js';

function App() {
  return (
    <div className="App">
      
      <Header />
      <div className="flex-container">
        <Navigation />
        <Section />
      </div>
      
    </div>
    
    
  );
}

export default App;
