
import {React } from 'react';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/auth/login/Login';
import Logout  from './pages/auth/signup/Logout';
import Header from './pages/header/Header';
import Dashboard from './pages/dashboard/Dashboard';
 function App() {
  return (
    <>
    <Header></Header>
        <Routes>
          <Route path="/login" element={<Login></Login>}> </Route>
          <Route path="/signup" element={<Logout></Logout>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
        </>
  ); 
}

export default App;
