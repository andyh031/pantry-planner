import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import LoginPage from './components/LoginPage'
import PrivateRoute from './auth/PrivateRoute'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App