import style from '../assets/tagModal.module.css'
import Button from 'src/components/Button'
import { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from 'src/contexts/AuthContext'

const TagModal = ({ triggerTagDialog, selectedTags, setSelectedTags }) => {
  const { user } = useContext(AuthContext)
  const [tagList, setTagList] = useState([])
  const [loader, setLoader] = useState(false)
  const initialSelectedTagList = useRef([...selectedTags])
  
  useEffect(() => {
    const getAllTags = async () => {
      setLoader(true)
      try {
        const response = await fetch(`http://localhost:3100/api/tags/${user.username}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
          },
        })
  
        if (response.status !== 200) {
          throw new Error('Failed to fetch data')
        }
  
        const { data } = await response.json()
        setTagList(data)
        setLoader(false)
      } catch (error) {
        return error;
      }
    }
    getAllTags()
  }, [user.username])

  const handleCheckboxChange = (tag) => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.some(({ id }) => id === tag.id)) {
        return prevSelectedTags.filter(({ id }) => id !== tag.id)
      } else {
        return [...prevSelectedTags, tag]
      }
    })
  }

  const handleCancelButton = () => {
    setSelectedTags(initialSelectedTagList.current)
    triggerTagDialog()
  }

  const handleAddTagButton = () => {
    triggerTagDialog()
  }

  return (
    <div className={style.tagDialog}>
      <div className={style.header}>Tag List</div>
      <div className={style.body} style={tagList.length === 0 ? { justifyContent: 'center', alignItems: 'center' } : { }} >
        {loader && <span className={style.loader}></span>}
        {tagList.length !== 0 ? (
          tagList.map(tag => (
            <div key={tag.id} className={style.tagItem}>
              <input
                type="checkbox"
                name={tag.tagName}
                id={tag.id}
                checked={selectedTags.some(({ id }) => id === tag.id)}
                onChange={() => handleCheckboxChange(tag)}
              />
              <label htmlFor={tag.id}>{tag.tagName}</label>
            </div>
          ))
        ) : (
          <p>No tag found</p>
        )}
      </div>
      <div className={style.footer}>
        <Button buttonName="cancel" buttonType="default" func={handleCancelButton} />
        <Button buttonName="submit" buttonType="primary" func={handleAddTagButton} />
      </div>
    </div>
  )
}

export default TagModal
