import './App.css';
 import React, { useState } from 'react'
 import { createContext } from 'react';
 import Navbar from '../src/compnents/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from '../src/compnents/Home';
import Contact from '../src/compnents/Contact';
import About from '../src/compnents/About';


 const GlobalData=createContext();


function App() {
  const[light,dark]=useState(false);
  const[msg,SetMsg]=useState("")
  return (
    <>
   <GlobalData.Provider value={{light,dark,msg,SetMsg}}>

    <div style={{background:light===false?"white":"black",color:light===false?"black":"white"}} className="App">

    <Navbar/>
    <div style={{margin:'1rem',textAlign:'center'}}>{msg}</div>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>

    </div>

    </GlobalData.Provider>
    </>
  );
}

export default App;
export {GlobalData};