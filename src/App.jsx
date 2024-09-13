/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';
import Error from './pages/Error';
import Processor from 'postcss/lib/processor';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path ='/' element = {<Home/>}></Route>
        <Route path ='/success' element ={<ProtectedRoute element={<Success/>}/>}></Route>
        <Route path ='/*' element ={<Error/>}></Route>
      </Routes>
    </Router>
  )
}

export default App