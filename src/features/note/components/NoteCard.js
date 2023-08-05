import { useCallback, useEffect, useState } from 'react'
import  style from '../assets/card.module.css'
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

  const trimHTML = (html, maxWords) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, "text/html")
  
    let wordsCount = 0
    let output = ""
  
    const traverse = (node) => {
      if (wordsCount >= maxWords) return
  
      if (node.nodeType === Node.TEXT_NODE) {
        const words = node.textContent.trim().split(/\s+/)
        for (const word of words) {
          if (wordsCount >= maxWords) return
          if (word !== "") { // Skip empty spaces
            output += word + " "
            wordsCount++
          }
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const tagName = node.tagName.toLowerCase()
        if (tagName === "br") {
          output += "\n"
        } else {
          output += `<${tagName}>`
          for (const childNode of node.childNodes) {
            traverse(childNode)
          }
          output += `</${tagName}>`
        }
      }
    }
  
    traverse(doc.body)
  
    output = output.trim()
  
    if (wordsCount >= maxWords) {
      output += "..."
    }
  
    return output
  }
  
  return (
    <div className={style.card} onClick={() => navigate(`/user/notes/${id}`)}>
      <div className={style.cardHeader}>
        <h2>{ timeConverter(updatedAt) }</h2>
        <h1>{ title }</h1>
        { tags.length !== 0 && (
        <div className={style.tagsContainer}>
          { tags.map((tag) => (
            <div key={tag.id} className={style.tag}>{ tag.tagName }</div>
          )) }
        </div>
        ) }
      </div>
      <div className={style.cardBody} dangerouslySetInnerHTML={{ __html: trimHTML(body, 26) }}></div>
      <div className={style.cardFooter}>
        <i>created at { timeConverter(createdAt) } </i>
      </div>
    </div>
  )
}
 
export default Card