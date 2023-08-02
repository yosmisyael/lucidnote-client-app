import style from "../assets/viewNote.module.css"
import { useNavigate } from "react-router-dom"
import { MdOutlineArrowBackIos, MdMoreVert } from 'react-icons/md'
import { useEffect, useState } from "react"

const ViewNote = () => {
  const [note, setNote] = useState()
  // const [tagList, setTagList] = useState()
  const pathname = window.location.pathname
  const id = pathname.split("/")[3]

  const navigate = useNavigate() 

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

  // const getTagById = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:3100/api/notes/${id}/tags`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": localStorage.getItem("token")
  //       }
  //     })
  //     if (response.status !== 200) {
  //       throw new Error("note is not found")
  //     }
  //     const data = await response.json()
  //     setTagList(data)
  //   } catch (error) {
  //     navigate("/user/notes")
  //   }
  // } 

  console.log(note)
  useEffect(() => {
    getNoteById()
    // getTagById()
  }, [])
  return (
    <section className={style.container}>
      <div className={style.navbar}>
        <span className={style.navbarComponent} onClick={() => navigate('/user/notes')}> <MdOutlineArrowBackIos size={12} /> Back to Note List</span> <span className={style.navbarComponent}><MdMoreVert size={24}/></span>
      </div>
      <div className={style.wrapper}>
        <div className={style.header}>
          {/* <h1>{note}</h1> */}
        </div>
        <div className={style.tagsContainer}>
          tags.map
        </div>
        {/* <div className={style.body} dangerouslySetInnerHTML={{__html: note}}></div> */}
      </div>
    </section>
  )
}
 
export default ViewNote
