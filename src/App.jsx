/* eslint-disable no-unused-vars */
import Navbar from './assets/Navbar'
import Profile from './assets/Profile'
import Projects from './assets/Projects'
import './assets/Styles.css'
import React from 'react'
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className='profile_items'>
      <Profile/>
      <Projects></Projects>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path='/project'></Route>
        <Route path='/profile'></Route>
        <Route path='/contact'></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
