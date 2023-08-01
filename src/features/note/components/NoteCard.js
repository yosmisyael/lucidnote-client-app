import { useEffect, useState } from 'react'
import  cardStyle from '../assets/card.module.css'

const Card = ({ id, updatedAt, createdAt, title, body }) => {
  const [tags, setTags] = useState([])
  const timeConverter = (unixTime) => {
    return new Date(unixTime).toLocaleDateString()
  }

  const getAttachedTags = async () => {
    const response = await fetch(`http://localhost:3100/api/notes/${id}/tags/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
    const { data } = await response.json()
    setTags(data)
  }
  useEffect(() => {
    getAttachedTags()
  })
  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.cardHeader}>
        <h2>{ timeConverter(updatedAt) }</h2>
        <h1>{ title }</h1>
        { tags.length !== 0 && (
        <div className={cardStyle.tagsContainer}>
          { tags.map((tag, index) => (
            <div key={index} className={cardStyle.tag}>{ tag }</div>
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