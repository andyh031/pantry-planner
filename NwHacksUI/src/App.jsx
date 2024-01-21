import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import './App.css'

import Home from './components/Home'
import LoginPage from './components/LoginPage'

function App() {

  return (
    <>
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/' element={<Home />}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
    </>
  )
}

export default App