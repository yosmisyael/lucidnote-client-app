import createNoteStyle from '../assets/createNote.module.css'
import TextEditor from '../components/TextEditor'
import TagModal from '../components/TagModal'
import { Input } from 'src/components/FormComponent'
import { BsTags } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'
import { MdOutlineClose, MdOutlineCheck } from 'react-icons/md'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal) 

const CreateNote = () => {
  const navigate = useNavigate()  
  const titleRef = useRef()
  const [quillContent, setQuillContent] = useState("")
  const [tagDialog, setTagDialog] = useState(false)
  const [selectedTags, setSelectedTags] = useState([])

  const triggerTagDialog = () => {
    setTagDialog(!tagDialog)
  }

  const addNote = async () => {
    const title = titleRef.current.value || "Untitled"
    const body = quillContent
    try {
      const noteResponse = await fetch('http://localhost:3100/api/notes', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
          title,
          body
        })
      })
      if (noteResponse.status !== 200) {
        const { errors } = await noteResponse.json()
        throw new Error(errors)
      }
    const { data } = await noteResponse.json()
    if (selectedTags.length !== 0) {
      const selectedTag = selectedTags.map((tag) => tag.id)
      const tagResponse = await fetch(`http://localhost:3100/api/notes/${data.id}/tags`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
        },
        body: JSON.stringify({
          selectedTag 
        })
      }) 
      if (tagResponse.status !== 200) {
        const { errors } = await tagResponse.json()
        throw new Error(errors)
      }
    }
    navigate('/user/notes')
    } catch (error) {
      MySwal.fire({
        title: <p>Failed to Save</p>,
        text: error.message,
        icon: 'error',
        iconColor: 'var(--text-primary)',
        color: 'var(--text-primary)',
        confirmButtonColor: 'var(--text-primary)'
      })
    }
  }
  return (
    <section className={createNoteStyle.container}>
      { tagDialog && <TagModal triggerTagDialog={triggerTagDialog} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />}
      <div className={createNoteStyle.navbar}>
        <div className={createNoteStyle.navigate} onClick={() => navigate('/user/notes')}>
          <MdOutlineClose size={24}/>
        </div> 
        <div>
          Create Note
        </div> 
        <div className={createNoteStyle.navigate} onClick={addNote}>
          <MdOutlineCheck size={24}/>
        </div>
      </div>
      <div className={createNoteStyle.noteEditor}>
        <Input ref={titleRef} placeholder="Untitled" />
        <div className={createNoteStyle.tagButton} onClick={triggerTagDialog}><BsTags /> Tag:</div>
        <div className={createNoteStyle.tagsContainer}>
          {selectedTags.map((item) => (
            <div key={ item.id } className={ createNoteStyle.tag }>{ item.tagName }</div>
          ))}
        </div>
        <TextEditor quillContent={quillContent} setQuillContent={setQuillContent}/>
      </div>
    </section>
  )
}
 
export default CreateNote