import React from 'react';
import './App.css';
import Header from './Header'; 
import Band from './Band';
import MetalMeta from './MetalMeta';
import Like from './Like';


function App() {
  return (
    <div className="App">
      <Header />
      <Band />
      <MetalMeta />
      <Like />
    </div>
  );

}

export default App;
