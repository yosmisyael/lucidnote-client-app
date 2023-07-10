import note from './assets/note.module.css';
import TextEditor from './components/TextEditor';
import TagModal from './components/TagModal';
import { Input } from '../../components/FormComponent';
import { BsTags } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MdOutlineClose, MdOutlineCheck } from 'react-icons/md'

const CreateNotes = () => {
  const navigate = useNavigate()
  const [tagDialog, setTagDialog] = useState(false)
  const triggerTagDialog = () => {
    setTagDialog(!tagDialog)
  }

  return (
    <section className={note.container}>
      { tagDialog && <TagModal triggerTagDialog={triggerTagDialog}/>}
      <div className={note.navbar}>
        <div className={note.navigate} onClick={() => navigate('/user/notes')}>
          <MdOutlineClose size={24}/>
        </div> 
        <div>
          Create Note
        </div> 
        <div className={note.navigate}>
          <MdOutlineCheck size={24}/>
        </div>
      </div>
      <div className={note.note}>
          <Input inputName='title' inputType='text' placeholder='title here'/>
          <div className={note.tagsContainer}>
            <div className={note.tagButton} onClick={triggerTagDialog}><BsTags size={16}/>tag</div>
          </div>
          <TextEditor />
      </div>
    </section>
  );
}
 
export default CreateNotes;