import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import style from 'src/assets/styles/flasher.module.css'

const Flasher = (type, title=null, message=null, timer=null) => {
  const MySwal = withReactContent(Swal)

  const api = async (url, options) => {
    try {
      const response = await fetch(url, options)

      if (response.status !== 200) {
        const { errors } = await response.json()
        throw new Error(errors)
      }

      MySwal.fire({
        title: <p>Delete Success</p>,
        icon: 'success',
        iconColor: 'var(--text-primary)',
        color: 'var(--text-primary)',
        confirmButtonColor: 'var(--text-primary)',
      })
    } catch (error) {
      MySwal.fire({
        title: <p>Failed to Delete</p>,
        text: error.message,
        icon: 'error',
        iconColor: 'var(--text-primary)',
        color: 'var(--text-primary)',
        confirmButtonColor: 'var(--text-primary)',
      })
    }
  }

  switch (type) {
    case 'success':
        MySwal.fire({
          title: <p>{ title }</p>,
          icon: 'success',
          iconColor: 'var(--text-primary)',
          color: 'var(--text-primary)',
          confirmButtonColor: 'var(--text-primary)',
          text: message ? message : null,
          timer: timer ? timer : null
        })      
      break

    case 'failed':
      MySwal.fire({
        title: <p>{ title }</p>,
        icon: 'error',
        text: message,
        iconColor: 'var(--text-primary)',
        color: 'var(--text-primary)',
        confirmButtonColor: 'var(--text-primary)'
      })
      break

    case 'dialog':
      return (url, options) => {
        return (
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
              cancelButton: style.customCancelButton
            }
          }).then(async (result) => {
            if (!result.isConfirmed) return
            await api(url, options)
            return 200
          })
        )
      }

    default:
      break
  }
}
 
export default Flasher