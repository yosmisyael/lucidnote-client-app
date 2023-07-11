import React from "react";
import '../assets/styles/formComponent.module.css';

const Input = ({ inputName, inputType, placeholder=undefined, onChange=undefined, value=undefined }) => {
  return (
    <React.Fragment>
      <input type={ inputType } name={ inputName } id={ inputName } placeholder={ placeholder } onChange={onChange} value={value}/>    
    </React.Fragment>
  );
}

export { Input }