import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import RideSearch from './components/RideSearch'
const App = () => {

  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/RideSearch' element={<RideSearch/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
