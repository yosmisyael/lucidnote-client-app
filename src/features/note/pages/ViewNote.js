import style from "../assets/viewNote.module.css"
import { useNavigate } from "react-router-dom"
import { MdOutlineArrowBackIos, MdMoreVert,  MdOutlineModeEdit } from "react-icons/md"
import { BsTrash } from 'react-icons/bs'
import { useCallback, useEffect, useState } from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ViewNote = () => {
  const MySwal = withReactContent(Swal)
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

  const deleteNote = async () => {
    try {
      MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        iconColor: 'var(--text-primary)',
        showCancelButton: true,
        confirmButtonColor: 'var(--text-primary)',
        cancelButtonColor: 'var(--secondary-color)',
        confirmButtonText: 'Delete',
        customClass: {
          cancelButton: style.customCancelButton
        }
      }).then(async (result) => {
        if (!result.isConfirmed) {
          return;
        }
        if (result.isConfirmed) {
          const response = await fetch(`http://localhost:3100/api/notes/${id}`, {
            method: 'DELETE',
            headers: {
              'Authorization': localStorage.getItem('token')
            }
          })
          if (response.status !== 200) {
            const { errors } = await response.json()
            throw new Error(errors)
          }
          MySwal.fire({
            title: <p>Delete Note Success</p>,
            text: 'Your note has been deleted.',
            icon: 'success',
            iconColor: 'var(--text-primary)',
            color: 'var(--text-primary)',
            confirmButtonColor: 'var(--text-primary)'
          })
        }
        navigate("/user/notes")
      })
    } catch (error) {
      MySwal.fire({
        title: <p>Delete Note Failed</p>,
        text: error.message,
        icon: 'error',
        iconColor: 'var(--text-primary)',
        color: 'var(--text-primary)',
        confirmButtonColor: 'var(--text-primary)'
      })
    }
  }

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
            <li onClick={() => navigate(`/user/notes/${id}/update`)}><MdOutlineModeEdit size={20} /> Edit Note</li>
            <li onClick={deleteNote}><BsTrash size={20} />Delete</li>
          </ul>
        </div>)}
      </div>
      <div className={style.wrapper}>
        <div className={style.header}>
          <h1>{note.title}</h1>
        </div>
        { tagList.length !== 0 && (<div className={style.tagsContainer}>
          {tagList.map(tag => (
            <div key={tag.id} className={style.tag}> {tag.tagName} </div>
          ))}
        </div>) }
        <div className={style.body} dangerouslySetInnerHTML={{ __html: note.body }}></div>
      </div>
    </section>
  )
}
 
export default ViewNote
