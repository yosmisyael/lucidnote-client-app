import { useRef } from 'react'
import style from '../assets/tagModal.module.css'
import Button from 'src/components/Button'
import { Input } from 'src/components/FormComponent'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useEffect } from 'react'

const TagModal = ({ handlerModal }) => {
  const MySwal = withReactContent(Swal)
  const inputTagRef = useRef()

  useEffect(() => {
    if (inputTagRef.current) {
      inputTagRef.current.focus()
    }
  }, [])

  const handleAdd = async () => {
    const tagName = inputTagRef.current.value
    try {
      const response = await fetch(`http://localhost:3100/api/tags`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
          tagName
        })
      })
      if (response.status !== 200) {
        const { errors } = await response.json()
        throw new Error(errors)
      }
      handlerModal()
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

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h3>Configure your tag</h3>
      </div>
      <div className={style.body}>
        <div className={style.inputWrapper}>
          <Input inputName='tagName' inputType='text' placeholder='new tag name' ref={inputTagRef} />
        </div>
      </div>
      <div className={style.footer}>
        <Button buttonName='cancel' buttonType='default' func={handlerModal} />
        <Button buttonName='submit' buttonType='primary' func={handleAdd} />
      </div>
    </div>
  )
}
 
export default TagModal