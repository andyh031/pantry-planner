import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import './App.css'

import Home from './components/Home'
import LoginPage from './components/LoginPage'
// import PrivateRoute from './auth/PrivateRoute'
import TestPage from './api/TestPage';

function App() {

  return (
    <>
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/' element={<Home />} />
          <Route path="*" element={<Navigate to="/login" />}/>
          <Route path='/test' element={<TestPage />}/>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
    </>
  )
}

export default App