import React from 'react'
import Navbar from '../src/components/Navbar'
import Subnavbar from '../src/components/Subnavbar'
import { Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import Login from '../src/pages/Login'
import SearchPage from '../src/pages/SearchPage'
import HospitalsScreen from './pages/HospitalsScreen';

const App = () => {
  return (
    <div>
    <Navbar />
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/hospitalsScreen" element={<HospitalsScreen />} />
       </Routes>
     {/* <Subnavbar /> */}
    
    </div>
  )
}

export default App