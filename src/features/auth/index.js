import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Logo from '../../components/Logo';
import authStyles from './assets/styles/auth.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
              <p>
                Don't have an account?
              </p>
              <p>
               <span style={{fontWeight: '700', cursor: 'pointer'}} onClick={handleFlip} >Create account</span>  
              </p>
            </div>
            <div className={authStyles.backSide}>
              <h1>Register</h1>
              <SignUp />
              <p>
                By creating an account, you are agreeing to our <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>.
              </p>
              <p>
                Already have an account? <span style={{fontWeight: '700', cursor: 'pointer'}} onClick={handleFlip}>Sign In</span>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
 
export default Auth;