import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    if (!storedToken) {
      setUser(null)
    }
    const getUser = async () => {
      const response = await fetch('http://localhost:3100/api/users/current', {
        method: 'GET',
        headers: {
          'Authorization': localStorage.getItem('token'),
        } 
      })
      const { data } = await response.json()
      setUser(data)
    }
    getUser()
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
