import note from './assets/note.module.css';
import TextEditor from './components/TextEditor';
import { Input } from '../../components/FormComponent';
import { BsTags } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { MdOutlineClose, MdOutlineCheck } from 'react-icons/md'

const CreateNotes = () => {
  const navigate = useNavigate()
  return (
    <section className={note.container}>
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
          <Input data={{inputName: 'title', inputType: 'text', placeholder: 'title here'}} />
          <div className={note.tagsContainer}>
            <div className={note.tagButton}><BsTags size={16}/>tag</div>
          </div>
          <TextEditor />
      </div>
    </section>
  );
}
 
export default CreateNotes;