import modal from '../assets/styles/modal.module.css';
import Button from './Button';

const TagModal = ({ triggerModal }) => {
  return (
    <div className={modal.filterDialog}>
        <div className={modal.header}>
          <h1>Select Tags:</h1>
        </div>
        <div className={modal.body}>
          <div className={modal.checkboxWrapper}>
            <input type="checkbox" name="selectedTag" id="tag1" value={'some value'}/>
            <label htmlFor="tag1">tag1</label>
          </div>
          <div className={modal.checkboxWrapper}>
            <input type="checkbox" name="selectedTag" id="tag1" value={'some value'}/>
            <label htmlFor="tag1">tag1</label>
          </div>
        </div>
        <div className={modal.footer}>
          <Button buttonName='cancel' buttonType='default' func={triggerModal} />
          <Button buttonName='apply' buttonType='primary' />
        </div>
      </div>
  );
}
 
export default TagModal;