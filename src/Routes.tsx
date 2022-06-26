import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Landing_page from './pages/Landing_page';
import Login from './pages/Login';

const App_routes = () => {
  return (
    <Routes>
      <Route path='/' element={ <Landing_page />} />
      <Route path='/login' element={ <Login />} />
    </Routes>
  )
}

export default App_routes;