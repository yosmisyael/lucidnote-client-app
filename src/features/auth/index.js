import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Logo from '../../components/Logo'
import auth from './assets/auth.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const AuthFeature = () => {
  const [isFlipped, setFlipped] = useState(false)
  const handleFlip = () => {
    setFlipped(!isFlipped)
  }
  const navigate = useNavigate();
  return (
      <div className={ `${auth.container} flex flex-centered relative` }>
        <div className={`fixed flex ${auth.navbar}`}  onClick={() => navigate('/')}>
          <div style={{ cursor: 'pointer' }}><Logo size={'3rem'} /> </div>          
        </div>
        <div className={auth.cardWrapper}>
          <div className={`${auth.card} ${ isFlipped ? auth.flipped : ''}`}>
            <div className={auth.frontSide}>
              <h1>Login</h1>
              <SignIn />
              <p>
                Don't have an account?
              </p>
              <p>
               <span style={{fontWeight: '700', cursor: 'pointer'}} onClick={handleFlip} >Create account</span> 
              </p>
            </div>
            <div className={auth.backSide}>
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
 
export default AuthFeature;