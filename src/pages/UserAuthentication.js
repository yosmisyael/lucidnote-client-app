import Auth from '../features/auth/index';
import { useLocation } from 'react-router-dom';

const Login = () => {
  const { pathname } = useLocation();
  return (<Auth currentPath={ pathname }/>);
}
 
export default Login;