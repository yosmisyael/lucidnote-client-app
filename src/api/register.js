import Flasher from 'src/components/Flasher'

const validatePassword = (firstInput, confirmInput) => {
  try {
    if(firstInput.current.value !== confirmInput.current.value) {
      throw new Error('password and password confirmation must match')
    }

    return true
  } catch (error) {
    Flasher('failed', 'Failed Register', error.message)
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

    Flasher('success', 'Registration Success')
    return { status: response.status, ...await response.json()}
  } catch (error) {
    Flasher('failed', 'Registration Failed', error.message)
  }
}

export { register, validatePassword }