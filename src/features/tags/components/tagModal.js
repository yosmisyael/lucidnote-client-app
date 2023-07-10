import tagModal from '../assets/tagModal.module.css';
import Button from 'src/components/Button';
import { Input } from 'src/components/FormComponent';

const TagModal = ({ handlerModal }) => {
  return (
    <div className={tagModal.container}>
      <div className={tagModal.header}>
        <h3>Configure your tag</h3>
      </div>
      <div className={tagModal.body}>
        <div className={tagModal.inputWrapper}>
          <Input inputName='tagName' inputType='text' value='test' />
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