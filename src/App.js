import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Nav from './components/Nav';
import CatImg from './pages/CatImg';
import './App.css'
function App() {
  return (
    <div className="App">
      <h1> 🐱 Simple Cat App 🐱 </h1>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/CatImg" element={<CatImg />} />
      </Routes>
      <Nav />
    </div>
  );
}

export default App;
