import tagModal from '../assets/tagModal.module.css'
import Button from 'src/components/Button'
import { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from 'src/contexts/AuthContext'

const TagModal = ({ triggerTagDialog, selectedTags, setSelectedTags }) => {
  const user = useContext(AuthContext)
  const [tagList, setTagList] = useState([])
  const initialSelectedTagList = useRef([...selectedTags])

  useEffect(() => {
    const getAllTags = async () => {
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
      } catch (error) {
        console.error('Error fetching tags:', error)
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
    <div className={tagModal.tagDialog}>
      <div className={tagModal.header}>Tag List</div>
      <div className={tagModal.body}>
        {tagList.length > 0 ? (
          tagList.map(tag => (
            <div key={tag.id} className={tagModal.tagItem}>
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
      <div className={tagModal.footer}>
        <Button buttonName="cancel" buttonType="default" func={handleCancelButton} />
        <Button buttonName="add" buttonType="primary" func={handleAddTagButton} />
      </div>
    </div>
  )
}

export default TagModal
