import { Input } from 'src/components/FormComponent';
import Button from 'src/components/Button';
import formSignIn from '../assets/form.module.css';
import { BsPerson, BsShieldLock, BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useState, useRef } from 'react';
import login from 'src/api/login';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate()

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const showPassword = () => {
    setPasswordVisibility(current => !current); 
  }

  const [typed, setTyped] = useState()
  const inputHandler = (e) => {
    setTyped(e.target.value)
  }

  const usernameRef = useRef()
  const passwordRef = useRef()
  
  const submitHandler = async (e) => {
    e.preventDefault()
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value 
    }
    try {
      const response = await login('http://localhost:3100/api/users/login', data)
        if (response.status === 200) {
          usernameRef.current.value = ''
          passwordRef.current.value = ''
          navigate('/user')
        }                   
    } catch (error) {
      return error
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={`${formSignIn.wrapperInput} flex flex-centered`}>
        <div className={formSignIn.wrapperIcon}><BsPerson size={20}/></div>
        <Input inputName='username' inputType='text' placeholder='username' ref={usernameRef}/>
      </div>
      <div className={`${formSignIn.wrapperInput} flex flex-centered`}>
        <div className={ formSignIn.wrapperIcon }><BsShieldLock size={20}/></div>
        <Input 
          inputName='password'
          inputType={passwordVisibility ? 'text': 'password'}
          placeholder='password'
          onChange={inputHandler}
          ref={passwordRef}
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