import React from 'react';
import homeStyles from '../assets/styles/home.module.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import { BsBox } from 'react-icons/bs';

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className={`${homeStyles.container} flex flex-centered flex-column relative`}>
        <BsBox className={homeStyles.boxBgFirst}/>
        <BsBox className={homeStyles.boxBgSecond}/>
        <BsBox className={homeStyles.boxBgThird}/>
        <h1>Welcome to <span style={{color: 'var(--text-accent)'}}>Lucid</span>Note</h1>
        <p>
          QuickNote helps you easily jot down important ideas, lists, and notes. Don't let ideas slip by, keep capturing them and saving them in this app full of creativity and productivity
        </p>
        <div className={`${homeStyles.btnWrapper} flex flex-centered`}>
          <Button data={{ buttonName: 'Get Started', buttonType: 'primary'}} />
          <Button data={{ buttonName: 'Documentation', buttonType: 'default'}} />
        </div>
      </section>
      <section>
        <div className={`flex ${homeStyles.container}`}>
          Hallos
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}
 
export default Home;