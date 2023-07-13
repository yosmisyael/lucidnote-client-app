const getUser = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    }
  })
  const { data } = await response.json()  
  return data
}
export default getUser