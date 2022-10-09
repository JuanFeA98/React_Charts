import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js'
import Laboratorio from './pages/Laboratorio.js'

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/laboratorio' element={<Laboratorio/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
