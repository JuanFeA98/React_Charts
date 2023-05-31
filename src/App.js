import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
// import Laboratorio from './pages/Laboratorio.js'
// import VictoryCharts from './pages/Victory_Charts';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          {/* <Route path='/laboratorio' element={<Laboratorio/>}></Route> */}
          {/* <Route path='/victory_charts' element={<VictoryCharts/>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
