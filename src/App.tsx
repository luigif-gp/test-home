import React from 'react';
import './App.css';
import Footer from './pages/footer';
import Home from './pages/home';
import Navbar from './pages/navbar';

function App() {
  return (
    <div className="bg-black-alt font-sans leading-normal tracking-normal">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
