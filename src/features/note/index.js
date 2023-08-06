import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Input } from 'src/components/FormComponent'
import Card from './components/NoteCard'
import notes from './assets/index.module.css'
import TagModal from 'src/components/Modals'
import { MdNoteAdd, MdOutlineArrowForwardIos, MdFilterListAlt, MdOutlineClose, MdSearch } from 'react-icons/md'

const Notes = () => {
  const navigate = useNavigate()
  const mobile = useMediaQuery({ query: '(max-width: 768px)' })
  const searchBarRef = useRef(null)
  const [modal, setModal] = useState(false)
  const [searchBar, setSearchBar] = useState(false)
  const [noteList, setNoteList] = useState([])
  const [keyword, setKeyword] = useState('')

  const triggerModal = () => {
    setModal(!modal)
  }

  const triggerSearch = () => {
    setSearchBar(!searchBar)
  }

  const closeSearchBar = () => {
    setKeyword('')
    setSearchBar(!searchBar)
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  const getNotes = async (title=undefined) => {
    const url = title ? `http://localhost:3100/api/notes?title=${title}` : 'http://localhost:3100/api/notes'
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
    if (title) {
      const response = await fetch(`http://localhost:3100/api/notes?title=${title}`, {
        method: 'GET',
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      })
      const { data } = await response.json()
      setNoteList(data)
    }
    const { data } = await response.json()
    setNoteList(data)
  }

  useEffect(() => {
    getNotes(keyword)
    if (searchBar) {
      searchBarRef.current.focus()
    }
  }, [keyword, searchBar])

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
          { searchBar &&  (<Input inputName='keyword' inputType='text' placeholder='search notes by title here ...' onChange={handleChange} value={keyword} ref={searchBarRef} />) }
          { searchBar && <button onClick={closeSearchBar}><MdOutlineClose size={24} /> </button> }
          { !searchBar && <button onClick={triggerSearch}><MdSearch size={24} /> </button> }
          <button onClick={triggerModal}><MdFilterListAlt size={24} /></button>
        </div>
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
  )
}
 
export default Notes