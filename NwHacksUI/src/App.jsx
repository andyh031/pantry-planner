import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import LoginPage from './auth/LoginPage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
        </Routes>
      </Router>
    </>
  )
}

export default App