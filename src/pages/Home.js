import React from 'react';
import styles from '../assets/styles/home.module.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className={`${styles.container} flex flex-centered flex-column relative`}>
        <h1>Welcome to <span style={{color: 'var(--text-accent)'}}>Lucid</span>Note</h1>
        <p>
          QuickNote helps you easily jot down important ideas, lists, and notes. Don't let ideas slip by, keep capturing them and saving them in this app full of creativity and productivity
        </p>
        <div className={`${styles.btnWrapper} flex flex-centered`}>
          <Button data={{ buttonName: 'Get Started', buttonType: 'primary'}} />
          <Button data={{ buttonName: 'Documentation', buttonType: 'default'}} />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
 
export default Home;