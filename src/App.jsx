import React, { useState } from 'react'
import { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if (email === 'admin@menubar.com' && password === '123') {
      setUser('admin')
    }
    else if (email === 'user@me.com' && password === '123') {
      setUser('employee')
    }
    else {
      alert('invalid credentials')
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard /> : user === 'employee' ? <EmployeeDashboard/> : null}
    </>
  )
}

export default App
