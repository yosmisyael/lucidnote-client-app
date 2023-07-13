import { MdOutlineModeEdit, MdOutlineClose, MdOutlineCheck } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'
import tags from '../assets/tagCard.module.css'
import { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const TagCard = ({ id, tagName }) => {
  const [editMode, setEditMode] = useState(false)
  
  const triggerEditMode = () => {
    setEditMode(!editMode)
    console.log(inputTagRef.current.id)
  }

  const inputTagRef = useRef()
  
  useEffect(() => {
    if (editMode) {
      inputTagRef.current.focus();
    }
  }, [editMode]);

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
      setEditMode(!editMode)
    } catch (error) {
      MySwal.fire({
        title: <p>Update Tag Failed</p>,
        text: error.message,
        icon: 'error',
        iconColor: 'var(--text-primary)',
        color: 'var(--text-primary)',
        confirmButtonColor: 'var(--text-primary)'
      })
    }
  } 

  return (
    <div className={tags.wrapper}>
      <div className={tags.tagWrapper}>
        <input ref={inputTagRef} type="text" defaultValue={tagName} data-id={id} disabled={ editMode ? false : true } style={editMode ? {cursor: 'text'} : {cursor: 'pointer'}} />
        <div className={tags.actionBtn}>
          { !editMode && (
            <span onClick={triggerEditMode}><MdOutlineModeEdit size={20}/></span>
          ) }
          { editMode && (
            <span onClick={triggerEditMode}><MdOutlineClose size={20}/></span>
          ) }
          { editMode && (
            <span onClick={commitEdit}><MdOutlineCheck size={20}/></span>
          ) }
          <span><BsTrash size={20}/></span>
        </div>
      </div>
    </div>
  )
}
 
export default TagCard;