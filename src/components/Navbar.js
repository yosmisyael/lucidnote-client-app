import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BsSearch, BsChevronDown, BsXDiamond } from "react-icons/bs";
import Button from '../components/Button';
import navbar from '../assets/styles/navbar.module.css';
import Logo from '../components/Logo';
import { useMediaQuery } from 'react-responsive';
import { useRef, useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  function navigatorClick (path) {
    navigate(path)
  }
  const [menu, setMenu] = useState(false)
  const btnMenu = useRef()
  const bigScreen = useMediaQuery({query: "(min-width: 1025px)"});
  const smallScreen = useMediaQuery({query: "(max-width: 1024px)"});
  if (smallScreen) return (
    <header className={`${navbar.navbar} fixed flex flex-space-between`}>
      <a href="/"><Logo size={'3em'} /></a>
      <nav>
        <ul className={menu ? navbar.active : ""}>
          <li><Link>Why LucidNote</Link></li>
          <li><Link className="flex-centered">Features <BsChevronDown className={ navbar.BsChevronDown } /></Link></li>
          <li><Link>Source</Link></li>
          <Button buttonName='Login' buttonType='primary' func={() => navigatorClick('/authentication')} />  
        </ul>
      </nav>
      <div className={ `${navbar.wrapperCta} flex-centered` }>
        <Button buttonName={<BsSearch size={20} />} buttonType='icon'/>
        <button ref={btnMenu} onClick={ () => {
          setMenu(current => !current);
        } } style={{
          backgroundColor: "transparent",
          color: "var(--text-primary)",
          border: "none",
          cursor: "pointer",
          transition: "all 500ms",
          transform: menu ? "" : "rotate(135deg)"
        }}> <BsXDiamond size={24} /> </button>
      </div>
    </header>
  )
  if (bigScreen) return (
    <header className={`${navbar.navbar} fixed flex flex-space-between`}>
      <a href="/"><Logo size={'3em'} /></a>
      <nav>
        <ul>
          <li><Link>Why LucidNote</Link></li>
          <li><Link className="flex-centered">Features <BsChevronDown className={ navbar.BsChevronDown } /></Link></li>
          <li><Link>Source</Link></li>
        </ul>
      </nav>
      <div className={ `${navbar.wrapperCta} flex-centered` }>
        <Button buttonName={<BsSearch size={20} />} buttonType='icon'/>
        <Button buttonName='Login' buttonType='primary' func={() => navigatorClick('/authentication')} />
      </div>
    </header>
  )
  
}
 
export default Navbar;