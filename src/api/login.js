import { redirect } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const login = async (url, data) => {
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
    const { data: { token } } = await response.json()
    localStorage.setItem('token', token)
    redirect('/user')
    return
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

export default login
