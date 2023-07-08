import { Input } from '../../../components/FormComponent';
import Button from '../../../components/Button';
import formSignIn from '../assets/form.module.css';
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
        <Input data={{ inputName: 'username', inputType: 'text', placeholder:'username' }}/>
      </div>
      <div className={`${formSignIn.wrapperInput} flex flex-centered`}>
        <div className={ formSignIn.wrapperIcon }><BsShieldLock size={20}/></div>
        <Input data={{
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
      <div className={formSignIn.btnWrapper}>
        <Button data={{ buttonType: 'default', buttonName: 'Login' }} />
      </div>
      <div className={formSignIn.wrapper}>
        <input type="checkbox" id='isCookie' className={formSignIn.checkBox} /> 
        <label htmlFor='isCookie'>
          Remember me for 30 days
        </label> 
      </div>
    </form>
  );
}
 
export default SignIn;