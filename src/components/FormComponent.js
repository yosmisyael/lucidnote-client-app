import React from "react";
import '../assets/styles/formComponent.module.css';

const Input = React.forwardRef(({ inputName, inputType, placeholder=undefined, onChange=undefined, value=undefined, required=undefined }, ref ) => {
  return (
    <React.Fragment>
      <input type={ inputType } name={ inputName } id={ inputName } placeholder={ placeholder } onChange={onChange} value={value} ref={ref} required={required}/>    
    </React.Fragment>
  );
})

export { Input }