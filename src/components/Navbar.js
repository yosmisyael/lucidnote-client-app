import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { BsSearch, BsChevronDown } from "react-icons/bs";
import Button from '../components/Button';
import navbar from '../assets/styles/navbar.module.css';
import Logo from '../components/Logo';

const Navbar = () => {
  const history = useHistory();
  const navigate = (path) => {
    history.push(path);
  }
  return (
    <header className={`${navbar.navbar} fixed flex flex-space-between`}>
      <a href="/"><Logo size={'4em'} /></a>
      <nav>
        <ul>
          <li><Link>Why LucidNote</Link></li>
          <li><Link className="flex-centered">Features <BsChevronDown className={ `${navbar.BsChevronDown}` } /></Link></li>
          <li><Link>Source</Link></li>
        </ul>
      </nav>
      <div className={ `${navbar.wrapperCta} flex-centered` }>
        <Button data={{ buttonName: <BsSearch size={20} />, buttonType: 'icon' }}/>
        <Button data={{ buttonName: 'Login', buttonType: 'primary', func: () => navigate('/login') }} />
      </div>
    </header>
  );
}
 
export default Navbar;