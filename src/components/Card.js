import { useEffect, useState } from 'react';
import  cardStyle from '../assets/styles/card.module.css';

const Card = ({ id, date, title, body }) => {
  const timeConverter = (unixTime) => {
    return new Date(unixTime).toLocaleDateString()
  }

  const [tags, setTags] = useState([])
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
        <h2>{ timeConverter(date) }</h2>
        <h1>{ title }</h1>
        <div className={cardStyle.tagsContainer}>
          { tags.map((tag, index) => (
            <div key={index} className={cardStyle.tag}>{ tag }</div>
          )) }
        </div>
      </div>
      <div className={cardStyle.cardBody}>
        { body }
      </div>
      <div className={cardStyle.cardFooter}>
        this is footer
      </div>
    </div>
  );
}
 
export default Card;