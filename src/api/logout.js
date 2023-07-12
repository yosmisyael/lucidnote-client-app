import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const logout = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    })
    const result = await response.json()
    if (response.status !== 200) {
      const { errors } = result
      throw new Error(errors)
    }
    localStorage.clear()
    return result
  } catch (error) {
    MySwal.fire({
      title: <p>Logout Failed</p>,
      text: error.message,
      icon: 'error',
      iconColor: 'var(--text-primary)',
      color: 'var(--text-primary)',
      confirmButtonColor: 'var(--text-primary)'
    })
  }
}

export default logout
