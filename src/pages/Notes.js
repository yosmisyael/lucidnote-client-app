import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Input } from '../components/FormComponent';
import Card from 'src/components/Card';
import notes from '../assets/styles/notes.module.css';
import TagModal from 'src/components/Modals';
import { MdNoteAdd, MdOutlineArrowForwardIos, MdFilterListAlt, MdOutlineClose, MdSearch } from 'react-icons/md'

const Notes = () => {
  const mobile = useMediaQuery({ query: '(max-width: 768px)' })
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)
  const [searchBar, setSearchBar] = useState(false)
  const triggerModal = () => {
    setModal(!modal)
  }
  const triggerSearch = () => {
    setSearchBar(!searchBar)
  } 
  return (
    <section className={notes.container}>
      { modal && <div className={notes.shadow}></div> }
      <div className={notes.navbar}>
        { !mobile && <div className={notes.navigate}>
          <span onClick={() => navigate('/user')}>Dashboard</span> <MdOutlineArrowForwardIos size={12} /> <span>Notes</span>
        </div> }
        { mobile ? 
        (!searchBar && (<div className={notes.navigate}>
          <span onClick={() => navigate('/user')}>Dashboard</span> <MdOutlineArrowForwardIos size={12} /> <span>Notes</span>
        </div>)) : null 
        }
        <div className={notes.searchBar}>
          { searchBar &&  (<Input inputName='keyword' inputType='text' placeholder='search notes by title here ...'/>) }
          { searchBar && <button onClick={triggerSearch}><MdOutlineClose size={24} /> </button> }
          { !searchBar && <button onClick={triggerSearch}><MdSearch size={24} /> </button> }
          <button onClick={triggerModal}><MdFilterListAlt size={24} /></button>
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
      <div className={notes.buttonNav} onClick={() => navigate('/user/notes/add')}>
        <MdNoteAdd size={20}/> Add new note
      </div>
    </section>
  );
}
 
export default Notes;