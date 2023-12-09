import { useState } from 'react'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NotFound from './NotFond';
import './App.css'
import Calender from './Calender'  
import NavBar from './NavBar';   
import AddForm from "./add/AddForm";
function App() {


  return <AddForm />;
}

export default App