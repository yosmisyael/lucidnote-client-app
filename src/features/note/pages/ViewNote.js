import style from "../assets/viewNote.module.css"
import { useNavigate } from "react-router-dom"
import { MdOutlineArrowBackIos, MdMoreVert,  MdOutlineModeEdit } from "react-icons/md"
import { BsTrash } from 'react-icons/bs'
import { useCallback, useEffect, useState } from "react"

const ViewNote = () => {
  const [note, setNote] = useState({})
  const [tagList, setTagList] = useState([])
  const [popUpMenu, setPopUpMenu] = useState(false)
  const pathname = window.location.pathname
  const id = pathname.split('/')[3]
  const navigate = useNavigate() 

  const showPopUpMene = () => {
    setPopUpMenu(!popUpMenu)
  }

  const getTagById = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3100/api/notes/${id}/tags`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
        }
      })
      if (response.status !== 200) {
        throw new Error("note is not found")
      }
      const { data } = await response.json()
      setTagList(data)
    } catch (error) {
      navigate("/user/notes")
    }
  }, [id, navigate])   

  useEffect(() => {
    const getNoteById = async () => {
      try {
        const response = await fetch(`http://localhost:3100/api/notes/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
          }
        })
        if (response.status !== 200) {
          throw new Error("note is not found")
        }
        const { data } = await response.json()
        setNote(data)
      } catch (error) {
        navigate("/user/notes")
      }
    } 
    getNoteById()
    getTagById()
  }, [navigate, getTagById, id])

  return (
    <section className={style.container}>
      <div className={style.navbar}>
        <span className={style.navbarComponent} onClick={() => navigate('/user/notes')}> 
          <MdOutlineArrowBackIos size={12} /> Back to Note List</span> <span className={style.navbarComponent}>
            <MdMoreVert size={24} onClick={showPopUpMene} />
        </span>
        { popUpMenu && (<div className={style.popUpMenu}>
          <ul>
            <li><MdOutlineModeEdit size={20} /> Edit Note</li>
            <li><BsTrash size={20} /> Delete</li>
          </ul>
        </div>)}
      </div>
      <div className={style.wrapper}>
        <div className={style.header}>
          <h1>{note.title}</h1>
        </div>
        <div className={style.tagsContainer}>
          { tagList.length > 0 && tagList.map(tag => (
            <div className={style.tag}> {tag} </div>
          )) }
        </div>
        <div className={style.body} dangerouslySetInnerHTML={{ __html: note.body }}></div>
      </div>
    </section>
  )
}
 
export default ViewNote
