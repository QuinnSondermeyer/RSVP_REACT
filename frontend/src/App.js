import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Navbar from './components/Navbar';

import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route 
              path="/"
              element = {<Home/>}/>

          </Routes>
        </div>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
