import { useState } from 'react';
import tagModal from '../assets/tagModal.module.css';
import Button from 'src/components/Button';
import { Input } from 'src/components/FormComponent';

const TagModal = ({ handlerModal }) => {
  const [currentValue, setCurrentValue] = useState('initial');
  const handleInput = (e) => {
    setCurrentValue(e.target.value)
    console.log(e.target.value)
  }
  return (
    <div className={tagModal.container}>
      <div className={tagModal.header}>
        <h3>Configure your tag</h3>
      </div>
      <div className={tagModal.body}>
        <div className={tagModal.inputWrapper}>
          <Input inputName='tagName' inputType='text' value={currentValue} onChange={handleInput} />
        </div>
      </div>
      <div className={tagModal.footer}>
        <Button buttonName='cancel' buttonType='default' func={handlerModal} />
        <Button buttonName='submit' buttonType='primary'  />
      </div>
    </div>
  );
}
 
export default TagModal;