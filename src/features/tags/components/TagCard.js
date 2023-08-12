import { MdOutlineModeEdit, MdOutlineClose, MdOutlineCheck } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'
import style from '../assets/tagCard.module.css'
import { useState, useRef, useEffect } from 'react'
import Flasher from 'src/components/Flasher'

const TagCard = ({ id, tagName }) => {
  const [editMode, setEditMode] = useState(false)
  const [originalValue, setOriginalValue] = useState('')
  
  const triggerEditMode = () => {
    setEditMode(!editMode)
    setOriginalValue(tagName)
  }

  const inputTagRef = useRef()
  
  useEffect(() => {
    if (editMode) {
      inputTagRef.current.focus();
    }
  }, [editMode]);

  const cancelEdit = () => {
    triggerEditMode()
    inputTagRef.current.value = originalValue
  }

  const commitEdit = async () => {
    const tagId = inputTagRef.current.getAttribute('data-id')
    const tagValue = inputTagRef.current.value
    try {
      const response = await fetch(`http://localhost:3100/api/tags/${tagId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
          tagName: tagValue
        })
      })
      if (response.status !== 200) {
        const { errors } = await response.json()
        throw new Error(errors)
      }
      Flasher('success', 'Update Success',null, 1500)
      setEditMode(!editMode)
    } catch (error) {
      inputTagRef.current.focus()
      Flasher('failed', 'Failed to Update', error.message)
    }
  } 

  const handleDelete = async () => {
    const tagId = inputTagRef.current.getAttribute('data-id')
    const deleteConfirm = await Flasher('dialog')
    deleteConfirm(`http://localhost:3100/api/tags/${tagId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
  }

  return (
    <div className={style.wrapper}>
      <div className={style.tagWrapper}>
        <input ref={inputTagRef} type="text" defaultValue={tagName} data-id={id} disabled={ editMode ? false : true } style={editMode ? {cursor: 'text'} : {cursor: 'pointer'}} />
        <div className={style.actionBtn}>
          { !editMode && (
            <span onClick={triggerEditMode}><MdOutlineModeEdit size={20}/></span>
          ) }
          { editMode && (
            <span onClick={cancelEdit}><MdOutlineClose size={20}/></span>
          ) }
          { editMode && (
            <span onClick={commitEdit}><MdOutlineCheck size={20}/></span>
          ) }
          <span onClick={handleDelete}><BsTrash size={20}/></span>
        </div>
      </div>
    </div>
  )
}
 
export default TagCard;