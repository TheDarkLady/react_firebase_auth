import { useState } from 'react'

import './App.css'
import Login from './pages/login'
import Register from './pages/register'
import Profile from './pages/profile'
import { Route, Routes } from 'react-router-dom'
import Auth_route from './pages/Private_route'

function App() {


  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile" element={
          <Auth_route>
            <Profile />
          </Auth_route>
        }></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
