import { useNavigate } from 'react-router-dom'
import tags from './assets/tags.module.css'
import TagModal from './components/tagModal'
import TagCard from './components/TagCard'
import { MdOutlineArrowForwardIos, MdAddHome } from 'react-icons/md'
import { BsTags } from 'react-icons/bs'
import { useState, useEffect } from 'react'

const TagsFeature = () => {
  const navigate = useNavigate()
  const [tagConfigurationModal, setTagConfigurationModal] = useState(false)
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
        <TagCard key={ tag.id } id={ tag.id } tagName={ tag.tagName }/>
      ))}
      <div className={tags.btnAdd} onClick={handlerModal}> 
        <MdAddHome size={24}/> Add Tag
      </div>
      { tagConfigurationModal && <TagModal handlerModal={ handlerModal }/> }
    </section>
  )
}
 
export default TagsFeature