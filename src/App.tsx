import React from 'react';
import './App.css';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="bg-default font-sans leading-normal tracking-normal">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
