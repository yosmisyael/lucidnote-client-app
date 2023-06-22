import { Link } from 'react-router-dom';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import footerStyle from '../assets/styles/footer.module.css';

const Footer = () => {
  return (
    <div className={`${footerStyle.footer} flex`}>
      <div className={`flex flex-column ${footerStyle.gap}`}>
        <Link>
          <h3>
            Why LucidNote
          </h3>
        </Link>
      </div>
      <div className={`flex flex-column ${footerStyle.gap}`}>
        <h3>Features</h3> 
        <ul className={`flex flex-column ${footerStyle.gap}`}>
          <li><Link>Task</Link></li>
          <li><Link>Homepage</Link></li>
          <li><Link>Search</Link></li>
        </ul>
      </div>
      <div className={`flex flex-column ${footerStyle.gap}`}>
        <h3>Source</h3> 
        <ul className={`flex flex-column ${footerStyle.gap}`}>
          <li><Link>Documentation</Link></li>
        </ul>
      </div>
      <div className={`flex flex-column ${footerStyle.gap}`}>
        <h3>Get Connected</h3> 
        <ul className={`flex flex-column ${footerStyle.gap}`}>
          <li><Link style={{gap: '1em'}}> <BsGithub size={24}/> @yosmisyael</Link></li>
          <li><Link style={{gap: '1em'}}> <BsInstagram size={24} /> @yosmisyael</Link></li>
        </ul>
      </div>
    </div>
  );
}
 
export default Footer;