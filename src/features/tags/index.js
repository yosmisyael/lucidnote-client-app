import { useNavigate } from 'react-router-dom';
import tags from './assets/tags.module.css';
import TagModal from './components/tagModal';
import { MdOutlineArrowForwardIos, MdOutlineModeEdit, MdAddHome } from 'react-icons/md';
import { BsTags, BsTrash } from 'react-icons/bs';
import { useState } from 'react';

const TagsFeature = () => {
  const navigate = useNavigate();
  const [tagConfigurationModal, setTagConfigurationModal] = useState(false);
  const handlerModal = () => {
    setTagConfigurationModal(!tagConfigurationModal)
  }
  return (
    <section className={tags.container}>
      <div className={tags.navbar}>
        <div className={tags.navigate}>
          <span onClick={() => navigate('/user')} style={{cursor: 'pointer'}}>Dashboard</span> <MdOutlineArrowForwardIos size={12} /> <span style={{cursor: 'pointer'}}>Tag</span>
        </div>        
      </div>
      <div className={tags.header}>
        <h1>Tag List <BsTags /></h1>
      </div>
      <div className={tags.wrapper}>
        <div className={tags.tagWrapper}>
          <h2>Tag Title</h2>
          <div className={tags.actionBtn}>
            <span><MdOutlineModeEdit size={20}/></span>
            <span><BsTrash size={20}/></span>
          </div>
        </div>
        <div className={tags.tagWrapper}>
          <h2>Tag Title</h2>
          <div className={tags.actionBtn}>
            <span><MdOutlineModeEdit size={20}/></span>
            <span><BsTrash size={20}/></span>
          </div>
        </div>
        <div className={tags.tagWrapper}>
          <h2>Tag Title</h2>
          <div className={tags.actionBtn}>
            <span><MdOutlineModeEdit size={20}/></span>
            <span><BsTrash size={20}/></span>
          </div>
        </div>
      </div>
      <div className={tags.btnAdd} onClick={handlerModal}> 
        <MdAddHome size={24}/> Add Tag
      </div>
      { tagConfigurationModal && <TagModal handlerModal={ handlerModal }/> }
    </section>
  );
}
 
export default TagsFeature;