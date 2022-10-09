import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Laboratory from './pages/Laboratory';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/laboratory' element={<Laboratory/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
