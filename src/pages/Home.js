import React from 'react';
import homeStyles from '../assets/styles/home.module.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import homepageIcon from '../assets/icon-homepage.svg';
import { FcIdea, FcBullish } from 'react-icons/fc';

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className={`${homeStyles.canvas} relative`}>
        <div className={homeStyles.holeContainer}>
          <div className={homeStyles.hole}></div>
          <div className={homeStyles.hole}></div>
          <div className={homeStyles.hole}></div>
          <div className={homeStyles.hole}></div>
          <div className={homeStyles.hole}></div>
          <div className={homeStyles.hole}></div>
          <div className={homeStyles.hole}></div>
          <div className={homeStyles.hole}></div>
          <div className={homeStyles.hole}></div>
          <div className={homeStyles.hole}></div>
          <div className={homeStyles.hole}></div>
          <div className={homeStyles.hole}></div>
          <div className={homeStyles.hole}></div>
          <div className={homeStyles.hole}></div>
          <div className={homeStyles.hole}></div>
          <div className={homeStyles.hole}></div>
          <div className={homeStyles.hole}></div>
        </div>
        <div className={homeStyles.lineContainer}>
          <div className={homeStyles.line}></div>
        </div>
        <div className={homeStyles.col1}>
          <h1><u>Capture</u>, <u>Organize</u>, and <u>Unleash</u> Your Ideas!</h1>
          <p>
            Keep capturing your ideas with this app full of creativity <FcIdea /> and productivity <FcBullish />
          </p>
          <div className={`${homeStyles.btnWrapper} flex flex-centered`}>
            <Button data={{ buttonName: 'Get Started', buttonType: 'primary'}} />
          </div>
        </div>
        <div className={homeStyles.col2}>
          <img src={homepageIcon} height={'600rem'} alt="" />
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}
 
export default Home;