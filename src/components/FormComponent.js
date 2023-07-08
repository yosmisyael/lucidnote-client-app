import React from "react";
import '../assets/styles/formComponent.module.css';

const Input = ({ data: { inputName, inputType, placeholder=undefined, onChange=undefined } }) => {
  const changeHandler = (e) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }
  return (
    <React.Fragment>
      <input type={ inputType } name={ inputName } id={ inputName } placeholder={ placeholder } onChange={changeHandler}/>    
    </React.Fragment>
  );
}

export { Input }