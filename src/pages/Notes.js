import notes from '../assets/styles/notes.module.css';
import { MdNoteAdd, MdOutlineArrowBackIos, MdFilterListAlt } from 'react-icons/md'
import FormInput from '../components/FormInput'
import Card from 'src/components/Card';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
  const navigate = useNavigate()
  return (
    <section className={notes.container}>
      <div className={notes.navbar}>
        <div className={notes.navigate} onClick={() => navigate('/user')}>
          <MdOutlineArrowBackIos /> <span style={{marginLeft: '.5rem'}}>Dashboard</span>
        </div>
        <div className={notes.searchBar}>
          <FormInput data={{
            inputName: 'keyword',
            inputType: 'text',
            placeholder: 'search notes by title here ...'
          }} />
          <button><MdFilterListAlt size={24}/></button>
        </div>
      </div>
      <div className={notes.sideBar}>
        <ul>
          <li>Notes</li>
          <li>Tags</li>
          <li>Account</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className={notes.noteWrapper}>
        <Card />
        <Card />
        <Card />
      </div>
      <div className={notes.buttonNav}>
        <MdNoteAdd size={20}/> Add new note
      </div>
    </section>
  );
}
 
export default Notes;