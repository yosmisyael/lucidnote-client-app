import logo from '../assets/lucidnote.svg';

const Logo = ({ size }) => {
  return (
    <div className='flex' style={{ height: size }}>
      <img src={ logo } alt="LucidNote" />
    </div>
  );
}
 
export default Logo;