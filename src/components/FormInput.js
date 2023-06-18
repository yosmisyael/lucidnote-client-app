import React from "react";
import '../assets/styles/form.module.css';

const Form = ({ data: { inputName, inputType, placeholder=undefined, onChange=undefined } }) => {
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
 
export default Form;