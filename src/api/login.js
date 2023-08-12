import Flasher from 'src/components/Flasher'

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
    return { status: response.status }
  } catch (error) {
    Flasher('failed', 'Register Failed', error.message)
  }
}

export default login
