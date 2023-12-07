import { useState } from 'react'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NotFound from './NotFond';
import './App.css'
import Calender from './Calender'  
import NavBar from './NavBar';   

function App() {


  return (
    <>
      <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/desktopone" element={<DesktopOne />} /> */}
        </Routes>
      </Router>
    </React.Suspense>


    {/* <div className='app'>
       <Calender/> 
    </div> */}
    </>
  )
}

export default App