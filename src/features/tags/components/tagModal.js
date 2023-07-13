import { useRef } from 'react';
import tagModal from '../assets/tagModal.module.css';
import Button from 'src/components/Button';
import { Input } from 'src/components/FormComponent';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const TagModal = ({ handlerModal }) => {
  const inputTagRef = useRef()

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
    <div className={tagModal.container}>
      <div className={tagModal.header}>
        <h3>Configure your tag</h3>
      </div>
      <div className={tagModal.body}>
        <div className={tagModal.inputWrapper}>
          <Input inputName='tagName' inputType='text' ref={inputTagRef} />
        </div>
      </div>
      <div className={tagModal.footer}>
        <Button buttonName='cancel' buttonType='default' func={handlerModal} />
        <Button buttonName='submit' buttonType='primary' func={handleAdd} />
      </div>
    </div>
  );
}
 
export default TagModal;