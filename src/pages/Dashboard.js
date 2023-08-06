import Logo from 'src/components/Logo'
import Button from 'src/components/Button'
import dashboard from '../assets/styles/dashboard.module.css'
import { useNavigate } from 'react-router-dom'
import { TfiAgenda } from 'react-icons/tfi'
import { GoTasklist } from 'react-icons/go'
import { BsTags, BsJournals } from 'react-icons/bs'
import logout from 'src/api/logout'
import { useContext, useEffect } from 'react'
import { AuthContext } from 'src/contexts/AuthContext'

const Dashboard = () => {
  const navigate = useNavigate()
  const { user, setUser } = useContext(AuthContext)

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetch('http://localhost:3100/api/users/current', {
          method: 'GET',
          headers: {
            'Authorization': localStorage.getItem('token'),
          }
        })
        const { data } = await response.json()
        setUser(data)
      } catch (error) {
        setUser(null)
      }
    }

    if (!user) {
      getUserData()
    }
  }, [user, setUser])

  if (!user) {
    return <div>Loading...</div>
  }

  const logoutHandler = async () => {
    logout('http://localhost:3100/api/users/logout')
      .then(response => {
        if (response.data === 'OK') {
          navigate('/')
        }
      })
  }

  const getTime = () => {
    const time = new Date(Date.now()).getHours()
    switch (true) {
      case time > 12:
        return 'afternoon'
      case time > 18:
        return 'evening'
      case time > 22:
        return 'night'
      default:
        return 'morning'
    } 
  }

  return ( 
    <section className={dashboard.container}>
      <div className={dashboard.navbar}>
        <div style={{cursor: 'pointer'}} onClick={() => navigate('/')}>
          <Logo size={'3rem'}/>          
        </div>
        <div className={dashboard.text}>
          <h3>Good {getTime()}, {user.username}! </h3>
        </div>
        <div>
          <Button buttonName='Logout' buttonType='default' func={logoutHandler} />
        </div>
      </div>
      <div className={dashboard.wrapper}>
        <div className={dashboard.feature} onClick={() => navigate('/user/notes')}>
          <BsJournals size={100} /> <h2> Note </h2>
        </div>
        <div className={dashboard.feature} onClick={() => navigate('/user/tags')}>
          <BsTags size={100} /> <h2>Tag</h2>
        </div>
        <div className={dashboard.feature}>
          <GoTasklist size={100} /> <h2>To Do</h2>
        </div>
        <div className={dashboard.feature}>
          <TfiAgenda size={100} /> <h2>Journal</h2>
        </div>
      </div>      
    </section>
  )
}
 
export default Dashboard