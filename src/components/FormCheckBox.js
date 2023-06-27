import { useRef } from "react";
import formStyle from '../assets/styles/form.module.css';

const FormCheckBox = ({ data: { content, inputName } }) => {
  const rememberUser = useRef(null)
  const sliderToggle = useRef(null)
  const handleClick = () => {
    if (rememberUser.current.checked === true) {
      sliderToggle.current.style.transform = "translateX(100%)";
    } else {
      sliderToggle.current.style.transform = "";
    }
  }
  const btnToggleClick = () => {
    rememberUser.current.checked = !rememberUser.current.checked
    if (rememberUser.current.checked === true) {
      sliderToggle.current.style.transform = "translateX(100%)";
    } else {
      sliderToggle.current.style.transform = "";
    }
  }
  return (
    <div className={ formStyle.confirmCheckBox }>
      <div className={ formStyle.btnToggle } onClick={btnToggleClick}>
        <span className={ formStyle.sliderInfo }>on</span>
        <span ref={sliderToggle} className={ formStyle.slider }></span>
        <span className={ formStyle.sliderInfo }>off</span>
      </div>
      <input ref={rememberUser} type="checkbox" name={inputName} id={inputName} onClick={handleClick} />
      <label htmlFor={inputName}>{ content }</label>
    </div>
  );
}
 
export default FormCheckBox;