import React, { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    // Demo login - in real app, this would be an API call
    const user = {
      name: 'John Doe',
      email: email,
      avatar: 'JD'
    }
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
    return true
  }

  const signup = (name, email, password) => {
    const user = {
      name: name,
      email: email,
      avatar: name.charAt(0).toUpperCase()
    }
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
    return true
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  const value = {
    user,
    login,
    signup,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}