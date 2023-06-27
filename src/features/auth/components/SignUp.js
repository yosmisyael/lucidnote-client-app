import FormInput from '../../../components/FormInput';
import Button from '../../../components/Button';
import formSignIn from '../assets/styles/form.module.css';
import { BsPerson, BsShieldLock, BsFillEyeFill, BsFillEyeSlashFill, BsEnvelope, BsShieldCheck } from 'react-icons/bs';
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
        <div className={formSignIn.wrapperIcon}><BsEnvelope size={20}/></div>
        <FormInput data={{ inputName: 'email', inputType: 'email', placeholder: 'email' }}/>
      </div>
      <div className={`${formSignIn.wrapperInput} flex flex-centered`}>
        <div className={formSignIn.wrapperIcon}><BsPerson size={20}/></div>
        <FormInput data={{ inputName: 'username', inputType: 'text', placeholder:'username' }}/>
      </div>
      <div className={`${formSignIn.wrapperInput} flex flex-centered`}>
        <div className={ formSignIn.wrapperIcon }><BsShieldLock size={20}/></div>
        <FormInput data={{
          inputName: 'paswword',
          inputType: passVisibility ? 'text': 'password',
          placeholder: 'create password',
          onChange: (isPass) => setPassword(isPass),
        }}/>
        <div className={formSignIn.wrapperIconSpecial} onClick={showPassword}>
          { password && !passVisibility && <BsFillEyeFill size={20}/> }
          { password && passVisibility && <BsFillEyeSlashFill size={20}/> }
        </div>
      </div>
      <div className={`${formSignIn.wrapperInput} flex flex-centered`}>
        <div className={ formSignIn.wrapperIcon }><BsShieldCheck size={20}/></div>
        <FormInput data={{
          inputName: 'paswwordConfirm',
          inputType: 'password',
          placeholder: 'confirm password',
        }}/>
      </div>
      <Button data={{ buttonType: 'contrast', buttonName: 'Sign Up' }} />
    </form>
  );
}
 
export default SignIn;