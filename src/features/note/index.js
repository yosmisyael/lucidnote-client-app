import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Input } from 'src/components/FormComponent';
import Card from 'src/components/Card';
import notes from 'src/assets/styles/notes.module.css';
import TagModal from 'src/components/Modals';
import { MdNoteAdd, MdOutlineArrowForwardIos, MdFilterListAlt, MdOutlineClose, MdSearch } from 'react-icons/md'

const Notes = () => {
  const navigate = useNavigate()
  const mobile = useMediaQuery({ query: '(max-width: 768px)' })
  const [modal, setModal] = useState(false)
  const [searchBar, setSearchBar] = useState(false)
  const triggerModal = () => {
    setModal(!modal)
  }
  const triggerSearch = () => {
    setSearchBar(!searchBar)
  }

  const [noteList, setNoteList] = useState([])
  const getNotes = async () => {
    const response = await fetch('http://localhost:3100/api/notes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
    const { data } = await response.json()
    setNoteList(data)
  }
  useEffect(() => {
    getNotes()
  }, [])

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
        { noteList.map(note => (
          <Card key={ note.id } id={ note.id } updatedAt={ note.updatedAt } createdAt={ note.createdAt } title={ note.title } body={ note.body } />
        )) }
      </div>
      <div className={notes.buttonNav} onClick={() => navigate('/user/notes/add')}>
        <MdNoteAdd size={20}/> Add new note
      </div>
    </section>
  );
}
 
export default Notes;