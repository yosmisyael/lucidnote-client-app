import Logo from 'src/components/Logo';
// import Button from 'src/components/Button';
import dashboard from '../assets/styles/dashboard.module.css';
import { useNavigate } from 'react-router-dom';
import { TfiAgenda } from 'react-icons/tfi';
import { GoTasklist } from 'react-icons/go';
import { BsTags, BsJournals } from 'react-icons/bs';

const Dashboard = () => {
  const navigate = useNavigate()
  const getTime = () => {
    const time = new Date(Date.now()).getHours()
    switch (true) {
      case time < 18:
        return 'afternoon'
      case time < 22:
        return 'evening'
      case time < 24:
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
          <h3>Good {getTime()}, Name! </h3>
        </div>
        {/* <div>
          <Button data={{buttonName: 'Logout', buttonType: 'default'}}/>
        </div> */}
      </div>
      <div className={dashboard.wrapper}>
        <div className={dashboard.feature} onClick={() => navigate('/user/notes')}>
          <BsJournals size={100} /> <h2> Notes </h2>
        </div>
        <div className={dashboard.feature}>
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
  );
}
 
export default Dashboard;