import React from "react";
import '../assets/styles/formComponent.module.css';

const Input = ({ inputName, inputType, placeholder=undefined, onChange=undefined, value=undefined }) => {
  const changeHandler = (e) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }
  return (
    <React.Fragment>
      <input type={ inputType } name={ inputName } id={ inputName } placeholder={ placeholder } onChange={changeHandler} value={value}/>    
    </React.Fragment>
  );
}

export { Input }