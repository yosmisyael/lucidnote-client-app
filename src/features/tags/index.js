import { useNavigate } from 'react-router-dom';
import tags from './assets/tags.module.css';
import TagModal from './components/tagModal';
import { MdOutlineArrowForwardIos, MdOutlineModeEdit, MdAddHome } from 'react-icons/md';
import { BsTags, BsTrash } from 'react-icons/bs';
import { useState, useEffect } from 'react';

const TagsFeature = () => {
  const navigate = useNavigate();
  const [tagConfigurationModal, setTagConfigurationModal] = useState(false);
  const handlerModal = () => {
    setTagConfigurationModal(!tagConfigurationModal)
  }

  const [tagList, setTagList] = useState([])
  const getTags = async () => {
    const response = await fetch(`http://localhost:3100/api/tags/dale`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
    const { data } = await response.json()
    setTagList(data)
  }
  useEffect(() => {
    getTags()
  })

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
      { tagList.map(tag => (
        <div key={ tag.id } className={tags.wrapper}>
          <div className={tags.tagWrapper}>
            <h2>{ tag.tagName }</h2>
            <div className={tags.actionBtn}>
              <span><MdOutlineModeEdit size={20}/></span>
              <span><BsTrash size={20}/></span>
            </div>
          </div>
        </div>
      ))}
      <div className={tags.btnAdd} onClick={handlerModal}> 
        <MdAddHome size={24}/> Add Tag
      </div>
      { tagConfigurationModal && <TagModal handlerModal={ handlerModal }/> }
    </section>
  );
}
 
export default TagsFeature;