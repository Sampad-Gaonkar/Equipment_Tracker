import React from 'react'
import Equipment from './components/Equipment'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import Update from './components/Update'


function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Equipment/>}></Route>
          <Route path='/create' element={<Form/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
