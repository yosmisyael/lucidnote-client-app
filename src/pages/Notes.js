import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput'
import Card from 'src/components/Card';
import notes from '../assets/styles/notes.module.css';
import TagModal from 'src/components/Modals';
import { MdNoteAdd, MdOutlineArrowBackIos, MdFilterListAlt } from 'react-icons/md'
import { useState } from 'react';

const Notes = () => {
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)
  const triggerModal = () => {
    setModal(!modal)
  }
  return (
    <section className={notes.container}>
      { modal && <div className={notes.shadow}></div> }
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
          <button onClick={triggerModal}><MdFilterListAlt size={24}/></button>
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
        { modal && <TagModal triggerModal={triggerModal} /> }
      <div className={notes.noteWrapper}>
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