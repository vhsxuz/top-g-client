import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ErrorPage from '../pages/Error-Page';
import GymList from '../pages/gym/Gym-List';
import GymDetails from '../pages/gym/Gym-details';
import ThreadList from '../pages/forum/Thread-List';
import ThreadDetail from '../pages/forum/Thread-detail';

function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/gym-list' element={<GymList />} />
      <Route path='/gym-details/:id' element={<GymDetails />} />
      <Route path='/thread-list' element={<ThreadList />} />
      <Route path='/thread-details/:id' element={<ThreadDetail />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default Routing