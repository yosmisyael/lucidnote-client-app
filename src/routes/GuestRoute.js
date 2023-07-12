import { Outlet, Navigate } from 'react-router-dom'

const GuestRoute = () => {
  const token = localStorage.getItem('token')
  
  return ( !token ? <Outlet /> : <Navigate to='/user' />)
}
 
export default GuestRoute;