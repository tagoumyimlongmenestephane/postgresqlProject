import React from 'react'
import { BrowserRouter, Route,Routes, Navigate } from 'react-router-dom'
import ProtectedRoute from './component/ProtectedRoute'
import Register from './pages/Register'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Login from './pages/Login'

function Logout(){
  localStorage.clear()
  return <Navigate to ='/login' />
}

function RegisterAndLogout(){
  localStorage.clear()
  return <Register />
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={
            <ProtectedRoute> <Home /> </ProtectedRoute>
           } />
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<RegisterAndLogout />} />
           <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App