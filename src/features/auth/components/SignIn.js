import { Input } from 'src/components/FormComponent';
import Button from 'src/components/Button';
import formSignIn from 'src/features/auth/assets/form.module.css';
import { BsPerson, BsShieldLock, BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useState } from 'react';

const SignIn = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const showPassword = () => {
    setPasswordVisibility(current => !current); 
  }
  const [typed, setTyped] = useState()
  const inputHandler = (e) => {
    setTyped(e.target.value)
  }
  return (
    <form action="" method="post">
      <div className={`${formSignIn.wrapperInput} flex flex-centered`}>
        <div className={formSignIn.wrapperIcon}><BsPerson size={20}/></div>
        <Input inputName='username' inputType='text' placeholder='username'/>
      </div>
      <div className={`${formSignIn.wrapperInput} flex flex-centered`}>
        <div className={ formSignIn.wrapperIcon }><BsShieldLock size={20}/></div>
        <Input 
          inputName='password'
          inputType={passwordVisibility ? 'text': 'password'}
          placeholder='password'
          onChange={inputHandler}
        />
        <div className={formSignIn.wrapperIconSpecial} onClick={showPassword}>
          { typed && !passwordVisibility && <BsFillEyeFill size={20}/> }
          { typed && passwordVisibility && <BsFillEyeSlashFill size={20}/> }
        </div>
      </div>
      <div className={formSignIn.btnWrapper}>
        <Button buttonType='default' buttonName='Login' />
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