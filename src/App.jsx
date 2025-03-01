import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      try {
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      } catch (error) {
        // If there's invalid JSON data, clear it and reset the state
        localStorage.removeItem('loggedInUser')
        setUser(null)
        setLoggedInUserData(null)
      }
    }
  }, [])



  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin')
      setLoggedInUserData(null)
      localStorage.setItem('loggedInUser', JSON.stringify({ 
        role: 'admin',
        data: null 
      }))
    }
    else if (userData && Array.isArray(userData)) {
      const employee = userData.find((e) => e.email === email && e.password === password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ 
          role: 'employee', 
          data: employee 
        }))
      } else {
        alert('Invalid credentials')
      }
    }
    else {
      alert('Invalid credentials')
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard changeUser= {setUser} /> : (user == "employee" ? <EmployeeDashboard changeUser= {setUser} data={LoggedInUserData} /> : null)}
    </>
  )
}

export default App
