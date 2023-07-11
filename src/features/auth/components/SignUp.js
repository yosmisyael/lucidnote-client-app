import { Input } from 'src/components/FormComponent'
import Button from 'src/components/Button'
import formSignIn from '../assets/form.module.css'
import { BsPerson, BsShieldLock, BsFillEyeFill, BsFillEyeSlashFill, BsEnvelope, BsShieldCheck } from 'react-icons/bs'
import { useState, useRef } from 'react'
import { register, validatePassword } from 'src/api/register'

const SignUp = () => {
  const [passVisibility, setPassVisibility] = useState(false)
  const showPassword = () => {
    setPassVisibility(current => !current); 
  }
  const [typed, setTyped] = useState()
  const inputHandler = (e) => {
    setTyped(e.target.value)
  }
  const emailRef = useRef()
  const nameRef = useRef()
  const usernameRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  return (
    <form action="" method="post" onSubmit={(e) => {
      e.preventDefault()
      const data = {
        email: emailRef.current.value,
        name: nameRef.current.value,
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      }
      if (!validatePassword(passwordRef, confirmPasswordRef)) return
      if (register('http://localhost:3100/api/users', data)) {
        emailRef.current.value = '';
        nameRef.current.value = '';
        usernameRef.current.value = '';
        passwordRef.current.value = '';
        confirmPasswordRef.current.value = '';
      }
    }}>
      <div className={`${formSignIn.wrapperInput} flex flex-centered`}>
        <div className={formSignIn.wrapperIcon}><BsEnvelope size={20}/></div>
        <Input inputName= 'email' inputType= 'email' placeholder= 'email' ref={emailRef} />
      </div>
      <div className={`${formSignIn.wrapperInput} flex flex-centered`}>
        <div className={formSignIn.wrapperIcon}><BsPerson size={20}/></div>
        <Input inputName= 'name' inputType= 'text' placeholder= 'name' ref={nameRef} />
      </div>
      <div className={`${formSignIn.wrapperInput} flex flex-centered`}>
        <div className={formSignIn.wrapperIcon}><BsPerson size={20}/></div>
        <Input inputName= 'registerUsername' inputType= 'text' placeholder='username' ref={usernameRef} />
      </div>
      <div className={`${formSignIn.wrapperInput} flex flex-centered`}>
        <div className={ formSignIn.wrapperIcon }><BsShieldLock size={20}/></div>
        <Input inputName='paswword' inputType={passVisibility ? 'text' : 'password'} placeholder='create password' onChange={inputHandler} ref={passwordRef} />
        <div className={formSignIn.wrapperIconSpecial} onClick={showPassword}>
          { typed && !passVisibility && <BsFillEyeFill size={20}/> }
          { typed && passVisibility && <BsFillEyeSlashFill size={20}/> }
        </div>
      </div>
      <div className={`${formSignIn.wrapperInput} flex flex-centered`}>
        <div className={ formSignIn.wrapperIcon }><BsShieldCheck size={20}/></div>
          <Input inputName='confirmPassword' inputType='password' placeholder='confirm password' ref={confirmPasswordRef} /> 
        </div>
      <div className={formSignIn.btnWrapper}>
        <Button buttonType='default' buttonName='Register' />
      </div>
    </form>
  );
}
 
export default SignUp;