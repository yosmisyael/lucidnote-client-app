import React from 'react';
import home from '../assets/styles/home.module.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import homepageIcon from '../assets/icon-homepage.svg';
import { FcIdea, FcBullish } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <Navbar />
      <section className={`${home.canvas} relative`}>
        <div className={home.holeContainer}>
          <div className={home.hole}></div>
          <div className={home.hole}></div>
          <div className={home.hole}></div>
          <div className={home.hole}></div>
          <div className={home.hole}></div>
          <div className={home.hole}></div>
          <div className={home.hole}></div>
          <div className={home.hole}></div>
          <div className={home.hole}></div>
          <div className={home.hole}></div>
          <div className={home.hole}></div>
          <div className={home.hole}></div>
          <div className={home.hole}></div>
          <div className={home.hole}></div>
          <div className={home.hole}></div>
          <div className={home.hole}></div>
          <div className={home.hole}></div>
        </div>
        <div className={home.lineContainer}>
          <div className={home.line}></div>
        </div>
        <div className={home.col1}>
          <h1><u>Capture</u>, <u>Organize</u>, and <u>Unleash</u> Your Ideas!</h1>
          <p>
            Keep capturing your ideas with this app full of creativity<FcIdea /> and productivity<FcBullish />
          </p>
          <div className={`${home.btnWrapper} flex flex-centered`}>
            <Button buttonName='Get Started' buttonType='primary' func={() => navigate('/authentication')} />
          </div>
        </div>
        <div className={home.col2}>
          <img src={homepageIcon} height={'600rem'} alt="" />
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}
 
export default Home;