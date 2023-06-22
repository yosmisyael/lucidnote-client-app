import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Logo from '../../components/Logo';
import authStyles from './assets/styles/auth.module.css';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { BsBox } from 'react-icons/bs';

const Auth = ({ currentPath }) => {
  const bigScreen = useMediaQuery({ query: '(min-width: 1224px)'});
  const smallScreen = useMediaQuery({ query: '(max-width: 1223px)'})
  const navigate = useNavigate();
  function navigatorClick (path) {
    navigate(path)
  }
  return (
      <div className={ `${authStyles.container} flex flex-centered relative` }>
        <div className={`fixed flex flex-centered ${authStyles.homeNav}`}  onClick={() => navigate('/')}>
          <BsBox size={30} color={'#CCD6DB'}/>
          Back
        </div>
        { smallScreen && <Logo size={'10em'} />}
        { bigScreen && <Logo size={'20em'} />}
        <div className={`${authStyles.wrapper} relative`}>
          <div className={ `${authStyles.wrapperFormName} absolute` }>
            <div className={ `${authStyles.formName} ${ currentPath === '/login' ? authStyles.active : '' }`} onClick={() => navigatorClick('/login')}>
              Sign In
            </div>
            <div className={ `${authStyles.formName} ${ currentPath === '/register' ? authStyles.active : '' }`} onClick={() => navigatorClick('/register')}>
              Sign Up
            </div>
          </div>
              { currentPath === '/login' && <SignIn />}
              { currentPath === '/register' && <SignUp />}
        </div>
      </div>
  );
}
 
export default Auth;