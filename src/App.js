import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header'; 
import MetalMeta from './MetalMeta';
import Band from './Band';


function App() {
  return (
    <div className="App">
      <Header />
      <MetalMeta />
      {/* <Band /> */}
    </div>
  );
}

export default App;
