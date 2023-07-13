import { createContext, useEffect, useState } from 'react'
import getUser from 'src/api/getUser'

export const AuthContext = createContext()

export function AuthProvider ({ children }) {
  const token = localStorage.getItem('token') 
  
  const [user, setUser] = useState(null)
  useEffect(() => {
    if (token) {
      getUser('http://localhost:3100/api/users/current')
        .then(response => {
          setUser(response)
        })
      } else {
        setUser(null)
      }
    }, [token])

    return (
      <AuthContext.Provider value={user}>
        { children }
      </AuthContext.Provider>
    )
}