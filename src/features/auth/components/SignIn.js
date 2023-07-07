import FormInput from '../../../components/FormInput';
import Button from '../../../components/Button';
import formSignIn from '../assets/styles/form.module.css';
import { BsPerson, BsShieldLock, BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useState } from 'react';

const SignIn = () => {
  const [passVisibility, setPassVisibility] = useState(false);
  const showPassword = () => {
    setPassVisibility(current => !current); 
  }
  const [password, setPassword] = useState('');
  return (
    <form action="" method="post">
      <div className={`${formSignIn.wrapperInput} flex flex-centered`}>
        <div className={formSignIn.wrapperIcon}><BsPerson size={20}/></div>
        <FormInput data={{ inputName: 'username', inputType: 'text', placeholder:'username' }}/>
      </div>
      <div className={`${formSignIn.wrapperInput} flex flex-centered`}>
        <div className={ formSignIn.wrapperIcon }><BsShieldLock size={20}/></div>
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
      <div >
        <input type="checkbox" id='isCookie' className={formSignIn.checkBox} /> 
        <label for='isCookie'>
          Remember me
        </label> 
      </div>
      <div className={formSignIn.btnWrapper}>
        <Button data={{ buttonType: 'default', buttonName: 'Login' }} />
      </div>
    </form>
  );
}
 
export default SignIn;