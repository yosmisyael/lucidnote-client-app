import React from "react";
import formStyle from '../assets/styles/form.module.css';

const FormCheckBox = ({ data: { content, inputName } }) => {
  return (
    <div className={ formStyle.confirmCheckBox }>
      <input type="checkbox" name={inputName} id={inputName} />
      <label htmlFor={inputName}>{ content }</label>
      <div className={ formStyle.btnToggle }>
        <span className={ formStyle.slider }></span>
      </div>
    </div>
  );
}
 
export default FormCheckBox;