import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Input } from 'src/components/FormComponent'
import Card from './components/NoteCard'
import style from './assets/index.module.css'
import TagModal from './components/TagModal'
import { MdNoteAdd, MdOutlineArrowForwardIos, MdFilterListAlt, MdOutlineClose, MdSearch } from 'react-icons/md'

const Notes = () => {
  const navigate = useNavigate()
  const mobile = useMediaQuery({ query: '(max-width: 768px)' })
  const searchBarRef = useRef(null)
  const [tagDialog, setTagDialog] = useState(false)
  const [selectedTags, setSelectedTags] = useState([])
  const [searchBar, setSearchBar] = useState(false)
  const [noteList, setNoteList] = useState([])
  const [keyword, setKeyword] = useState('')

  const triggerTagDialog = () => {
    setTagDialog(!tagDialog)
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
    <section className={style.container}>
      <div className={style.navbar}>
        {!mobile && (
          <div className={style.navigate}>
            <span onClick={() => navigate('/user')}>Dashboard</span> <MdOutlineArrowForwardIos size={12} /> <span>Notes</span>
          </div>
        )}
        {mobile ? (!searchBar && (
          <div className={style.navigate}>
            <span onClick={() => navigate('/user')}>Dashboard</span> <MdOutlineArrowForwardIos size={12} /> <span>Notes</span>
          </div>
        )) : null 
        }
        <div className={style.searchBar}>
          {searchBar && (
            <Input 
              inputName='keyword'
              inputType='text'
              placeholder='search notes by title here ...'
              onChange={handleChange}
              value={keyword}
              ref={searchBarRef}
            />
            )}
          {searchBar && <button onClick={closeSearchBar}><MdOutlineClose size={24} /></button>}
          {!searchBar && <button onClick={triggerSearch}><MdSearch size={24} /></button>}
          <button onClick={triggerTagDialog}><MdFilterListAlt size={24} /></button>
        </div>
      </div>
      {tagDialog && (
        <TagModal 
          triggerTagDialog={triggerTagDialog} 
          selectedTags={selectedTags} 
          setSelectedTags={setSelectedTags} 
        />
      )}
      <div className={style.noteWrapper}>
        {selectedTags.length !== 0 && (
          <div className={style.filterWrapper}>
            <h3>Filter by tags:</h3>
            <div className={style.tagContainer}>
              {selectedTags.map(item => (
                <div key={item.id} className={style.tag}>{item.tagName}</div>
              ))}
            </div>
          </div>
        )}
        {noteList.map(note => (
          <Card 
            key={note.id} 
            id={note.id} 
            updatedAt={note.updatedAt} 
            createdAt={note.createdAt} 
            title={note.title} 
            body={note.body} 
          />
        ))}
      </div>
      <div className={style.buttonNav} onClick={() => navigate('/user/notes/add')}>
        <MdNoteAdd size={20}/> Add new note
      </div>
    </section>
  )
}
 
export default Notes