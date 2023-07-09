import tagModal from '../assets/tagmodal.module.css';
import Button from '../../../components/Button';

const checkName = ''
const TagModal = ({triggerTagDialog}) => {
  return (
    <div className={tagModal.tagDialog}>
      <div className={tagModal.header}>
        Tag List
      </div>
      <div className={tagModal.body}>
      <div className={tagModal.tagItem}>
        <input type="checkbox" name={checkName} id={checkName} />
        <label htmlFor={checkName}></label>
      </div>
      </div>
      <div className={tagModal.footer}>
        <Button data={{buttonName: 'cancel', buttonType: 'default', func: triggerTagDialog}}/>
        <Button data={{buttonName: 'submit', buttonType: 'primary'}}/>
      </div>
    </div>
  );
}
 
export default TagModal;