import style from '../assets/createNote.module.css'
import TextEditor from '../components/TextEditor'
import TagModal from '../components/TagModal'
import { Input } from 'src/components/FormComponent'
import { BsTags } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { MdOutlineClose, MdOutlineCheck } from 'react-icons/md'
import Flasher from 'src/components/Flasher'

const UpdateNote = () => {
  const navigate = useNavigate()  
  const [title, setTitle] = useState("")
  const [quillContent, setQuillContent] = useState("")
  const [tagDialog, setTagDialog] = useState(false)
  const [selectedTags, setSelectedTags] = useState([])
  const pathname = window.location.pathname
  const id = pathname.split('/')[3]

  const triggerTagDialog = () => {
    setTagDialog(!tagDialog)
  }

  const getPrevNote = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3100/api/notes/${id}`, {
        method: "GET",
        headers: {
          "Authorization": localStorage.getItem("token"),
          "Content-Type": "application/json"
        }
      })
      if (response.status !== 200) {
        const { error } = await response.json()
        throw new Error(error)
      }
      const { data } = await response.json()
      setQuillContent(data.body)
      setTitle(data.title)
    } catch (error) {
      return error 
    }
  }, [id])

  const getPrevTags = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3100/api/notes/${id}/tags`, {
        method: "GET",
        headers: {
          "Authorization": localStorage.getItem("token"),
        },
      })
      if (response.status !== 200) {
        const { error } = await response.json()
        throw new Error(error)
      }
      const { data } = await response.json()
      setSelectedTags(data)
    } catch (error) {
      return error
    }
  }, [id])
 
  const updateNote = async () => {
    try {
      const response = await fetch(`http://localhost:3100/api/notes/${id}`, {
        method: "PUT",
        headers: {
          "Authorization": localStorage.getItem("token"),
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title, 
          body: quillContent
        })
      })

      if (response.status !== 200) {
        const { error } = await response.json()
        throw new Error(error)
      }
      
      if (selectedTags.length !== 0) {
        const attachedTags = selectedTags.map(({ id }) => id)
        await fetch(`http://localhost:3100/api/notes/${id}/tags`, {
          method: "PUT",
          headers: {
            "Authorization": localStorage.getItem("token"),
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            selectedTag: attachedTags
          })
        })
      }
      navigate(`/user/notes/${id}`)
    } catch (error) {
      Flasher('failed', 'Failed to Update Note', error.message)
    }
  }

  useEffect(() => {
    getPrevNote()
    getPrevTags()
  }, [getPrevNote, getPrevTags])

  return (
    <section className={style.container}>
      { tagDialog && <TagModal triggerTagDialog={triggerTagDialog} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />}
      <div className={style.navbar}>
        <div className={style.navigate} onClick={() => navigate('/user/notes')}>
          <MdOutlineClose size={24}/>
        </div> 
        <div>
          Create Note
        </div> 
        <div className={style.navigate} onClick={updateNote} >
          <MdOutlineCheck size={24} />
        </div>
      </div>
      <div className={style.noteEditor}>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        <div className={style.tagButton} onClick={triggerTagDialog}><BsTags /> Tag:</div>
        <div className={style.tagsContainer}>
          { selectedTags.length !== 0 && selectedTags.map((item) => (
            <div key={ item.id } className={ style.tag }>{ item.tagName }</div>
          )) }
        </div>
        <TextEditor quillContent={quillContent} setQuillContent={setQuillContent} />
      </div>
    </section>
  )
}
 
export default UpdateNote