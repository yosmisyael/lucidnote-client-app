import { useCallback, useEffect, useState } from 'react'
import  cardStyle from '../assets/card.module.css'
import { useNavigate } from 'react-router-dom'

const Card = ({ id, updatedAt, createdAt, title, body }) => {
  const [tags, setTags] = useState([])
  const timeConverter = (unixTime) => {
    return new Date(unixTime).toLocaleDateString()
  }

  const navigate = useNavigate()

  const getAttachedTags = useCallback(async () => {
    const response = await fetch(`http://localhost:3100/api/notes/${id}/tags/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
    const { data } = await response.json()
    setTags(data)
  }, [id])

  useEffect(() => {
    getAttachedTags()
  }, [getAttachedTags])
  return (
    <div className={cardStyle.card} onClick={() => navigate(`/user/notes/${id}`)}>
      <div className={cardStyle.cardHeader}>
        <h2>{ timeConverter(updatedAt) }</h2>
        <h1>{ title }</h1>
        { tags.length !== 0 && (
        <div className={cardStyle.tagsContainer}>
          { tags.map((tag) => (
            <div key={tag.id} className={cardStyle.tag}>{ tag.tagName }</div>
          )) }
        </div>
        ) }
      </div>
      <div className={cardStyle.cardBody} dangerouslySetInnerHTML={{ __html: body }}></div>
      <div className={cardStyle.cardFooter}>
        <i>created at { timeConverter(createdAt) } </i>
      </div>
    </div>
  );
}
 
export default Card;