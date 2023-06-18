import FormInput from '../../../components/FormInput';
import FormCheckBox from '../../../components/FormCheckBox';
import Button from '../../../components/Button';
import formSignIn from '../assets/styles/formSignIn.module.css';
import { BsFillPersonFill, BsShieldLockFill, BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useState } from 'react';

const SignIn = ({ current }) => {
  const [passVisibility, setPassVisibility] = useState(false);
  const showPassword = () => {
    setPassVisibility(current => !current); 
  }
  const [password, setPassword] = useState('');
  return (
    <form action="" method="post">
    <div className={`${formSignIn.wrapperInput} flex flex-centered`}>
      <div className={formSignIn.wrapperIcon}><BsFillPersonFill size={20}/></div>
      <FormInput data={{ inputName: 'username', inputType: 'text', placeholder:'username' }}/>
    </div>
    <div className={`${formSignIn.wrapperInput} flex flex-centered`}>
      <div className={ formSignIn.wrapperIcon }><BsShieldLockFill size={20}/></div>
      <FormInput data={{
        inputName: 'paswword',
        inputType: passVisibility ? 'text': 'password',
        placeholder: 'password',
        onChange: (isPass) => setPassword(isPass),
      }}/>
      <div className={formSignIn.wrapperIconSpecial} onClick={showPassword}>
        { password && !passVisibility && <BsFillEyeFill size={20}/> }
        { password && passVisibility && <BsFillEyeSlashFill size={20}/> }
      </div>
    </div>
    <FormCheckBox data={{inputName:'isCookie', content: 'Remember me for the next 30 days'}} />
    <Button data={{ buttonType: 'contrast', buttonName: 'Login' }} />
    </form>
  );
}
 
export default SignIn;