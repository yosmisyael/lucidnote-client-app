import React from 'react';
import style from '../assets/styles/home.module.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import homepageIcon from '../assets/icon-homepage.svg';
import { FcIdea, FcBullish } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const holes = []
  for (let i = 0; i < 18; i++) {
    holes.push(<div key={i} className={style.hole}></div>)
  }
  return (
    <React.Fragment>
      <Navbar />
      <section className={`${style.canvas} relative`}>
        <div className={style.holeContainer}>
          {holes}
        </div>
        <div className={style.lineContainer}>
          <div className={style.line}></div>
        </div>
        <div className={style.col1}>
          <h1><u>Capture</u>, <u>Organize</u>, and <u>Unleash</u> Your Ideas!</h1>
          <p>
            Keep capturing your ideas with this app full of creativity<FcIdea /> and productivity<FcBullish />
          </p>
          <div className={style.btnWrapper}>
            <Button buttonName='Get Started' buttonType='primary' func={() => navigate('/authentication')} />
          </div>
        </div>
        <div className={style.col2}>
          <img src={homepageIcon} className={style.homepageIcon} alt="" />
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}
 
export default Home;