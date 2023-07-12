import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const validatePassword = (firstInput, confirmInput) => {
  try {
    if(firstInput.current.value !== confirmInput.current.value) {
      throw new Error('Password and password confirmation must match')
    }
    return true
  } catch (error) {
    MySwal.fire({
      title: <p>Register Failed</p>,
      icon: 'error',
      text: error.message,
      iconColor: 'var(--text-primary)',
      color: 'var(--text-primary)',
      confirmButtonColor: 'var(--text-primary)'
    })
  }
  return false
}
const register = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (response.status !== 200) {
      const { errors } = await response.json() 
      throw new Error(errors)
    }
    MySwal.fire({
      title: <p>Register Success</p>,
      icon: 'success',
      iconColor: 'var(--text-primary)',
      color: 'var(--text-primary)',
      confirmButtonColor: 'var(--text-primary)'
    })
    return { status: response.status, ...await response.json()}
  } catch (error) {
    MySwal.fire({
      title: <p>Register Failed</p>,
      text: error.message,
      icon: 'error',
      iconColor: 'var(--text-primary)',
      color: 'var(--text-primary)',
      confirmButtonColor: 'var(--text-primary)'
    })
  }
}

export { register, validatePassword }