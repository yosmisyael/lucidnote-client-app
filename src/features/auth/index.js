import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Logo from '../../components/Logo';
import authStyles from './assets/styles/auth.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CgArrowsExchangeAltV } from 'react-icons/cg'

const Auth = ({ currentPath }) => {
  const [isFlipped, setFlipped] = useState(false)
  const handleFlip = () => {
    setFlipped(!isFlipped)
  }
  const navigate = useNavigate();
  return (
      <div className={ `${authStyles.container} flex flex-centered relative` }>
        <div className={`fixed flex ${authStyles.navbar}`}  onClick={() => navigate('/')}>
          <Logo size={'3rem'}/>          
        </div>
        <div className={authStyles.cardWrapper}>
          <div className={`${authStyles.card} ${ isFlipped ? authStyles.flipped : ''}`}>
            <div className={authStyles.frontSide}>
              <h1>Login</h1>
              <SignIn />
              <button onClick={handleFlip}> change it here </button>
            </div>
            <div className={authStyles.backSide}>
              <h1>Register</h1>
              <SignUp />
              <button className={authStyles.swipe} onClick={handleFlip}> <CgArrowsExchangeAltV size={30} style={{transform: 'rotate(45deg)'}}/>Login </button>
            </div>
          </div>
        </div>
      </div>
  );
}
 
export default Auth;