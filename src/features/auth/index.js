import SignIn from './components/SignIn';
import Logo from '../../components/Logo';
import authStyles from './assets/styles/auth.module.css';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

const Auth = ({ currentPath }) => {
  const bigScreen = useMediaQuery({ query: '(min-width: 1224px)'});
  const smallScreen = useMediaQuery({ query: '(max-width: 1223px)'})
  const history = useHistory();
  const navigate = (path) => {
    history.push(path);
  }
  return (
    <div className={`${authStyles.container} flex flex-centered relative`}>
      { smallScreen && <Logo size={'10em'} />}
      { bigScreen && <Logo size={'20em'} />}
      <div className={`${authStyles.wrapper} relative`}>
        <div className={ `${authStyles.wrapperFormName} absolute` }>
          <div className={ `${authStyles.formName} ${ currentPath === '/login' ? authStyles.active : ''}`} onClick={() => navigate('/login')}>Sign In</div>
          <div className={ `${authStyles.formName} ${ currentPath === '/register' ? authStyles.active : ''}`} onClick={() => navigate('/register')}>Sign Up</div>
        </div>
        <SignIn />
      </div>
    </div>
  );
}
 
export default Auth;