import { MdOutlineModeEdit, MdOutlineClose, MdOutlineCheck } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'
import tags from '../assets/tagCard.module.css'
import { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

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
      MySwal.fire({
        position: 'top-end',
        icon: 'success',
        iconColor: 'var(--text-primary)',
        title: 'Tag updated successfully',
        showConfirmButton: false,
        timer: 1500
      })
      setEditMode(!editMode)
    } catch (error) {
      inputTagRef.current.focus()
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

  const handleDelete = async () => {
    const tagId = inputTagRef.current.getAttribute('data-id')
    try {
      MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        iconColor: 'var(--text-primary)',
        showCancelButton: true,
        confirmButtonColor: 'var(--text-primary)',
        cancelButtonColor: 'var(--secondary-color)',
        confirmButtonText: 'Delete',
        customClass: {
          cancelButton: tags.customCancelButton
        }
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await fetch(`http://localhost:3100/api/tags/${tagId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem('token')
            }
          })
          if (response.status !== 200) {
            const { errors } = await response.json()
            throw new Error(errors)
          }
          MySwal.fire({
            title: <p>Delete Tag Success</p>,
            text: 'Your tag has been deleted.',
            icon: 'success',
            iconColor: 'var(--text-primary)',
            color: 'var(--text-primary)',
            confirmButtonColor: 'var(--text-primary)'
          })
        }
      })

    } catch (error) {
      MySwal.fire({
        title: <p>Delete Tag Failder</p>,
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