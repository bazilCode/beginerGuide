import {Route,Routes, BrowserRouter, Switch} from 'react-router-dom'
import React from 'react';
import './App.css';
import About from './component/about';
import AddStud from './component/addstud';
import Home from './component/home';
import Header from './component/header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>app.js from hello </h1>
      </div>
      <Header/>
      <Routes>
        <Route path="/" element={"NULL"}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/add" element={<AddStud/>}/>
        <Route path="/about" element={<About/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
