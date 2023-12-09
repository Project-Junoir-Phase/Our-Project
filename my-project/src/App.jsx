import { useState } from 'react'
import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NotFound from './NotFond';
import './App.css'
import Calender from './Calender'  
import NavBar from './NavBar';   
import Search from './search';
import SearchPage from './SearchPage';
import AddForm from "./add/AddForm";
import SignUp from './User Componet/SignUp/SignUp';
import Login from './User Componet/Login/login';

function App() {
  


  return (
    <>
      <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/AddRide" element={<AddForm />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />

          {/* <Route path="/desktopone" element={<DesktopOne />} /> */}
        </Routes>
      </Router>
    </React.Suspense>
     {/* <AddForm />; */}

    {/* <div className='app'>
       <Calender/> 
    </div> */}
    </>
  )

}

export default App