import notesStyle from '../assets/styles/notes.module.css';
import { MdNoteAdd, MdOutlineArrowBackIos, MdFilterListAlt } from 'react-icons/md'
import FormInput from '../components/FormInput'


const Notes = () => {
  return (
    <section className={notesStyle.container}>
      <div className={notesStyle.navbar}>
        <div className={notesStyle.navigate}>
          <MdOutlineArrowBackIos /> <span style={{marginLeft: '.5rem'}}>Dashboard</span>
        </div>
        <div className={notesStyle.searchBar}>
          <FormInput data={{
            inputName: 'keyword',
            inputType: 'text',
            placeholder: 'search notes by title here ...'
          }} />
          <button><MdFilterListAlt size={24}/></button>
        </div>
      </div>
      <div className={notesStyle.sideBar}>
        <ul>
          <li>Notes</li>
          <li>Tags</li>
          <li>Account</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className={notesStyle.noteWrapper}>
        <div className={notesStyle.card}>
          <div className={notesStyle.cardHeader}>
            <h2>21 March</h2>
            <h1>This is card title</h1>
            <div className={notesStyle.tagsContainer}>
              <div className={notesStyle.tag}>tag1</div>
              <div className={notesStyle.tag}>tag2</div>
            </div>
          </div>
          <div className={notesStyle.cardBody}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deleniti ducimus quas itaque.
          </div>
          <div className={notesStyle.cardFooter}>
            this is footer
          </div>
        </div>
        <div className={notesStyle.card}>
          <div className={notesStyle.cardHeader}>
            <h2>21 March</h2>
            <h1>This is card title</h1>
            <div className={notesStyle.tagsContainer}>
              <div className={notesStyle.tag}>tag1</div>
              <div className={notesStyle.tag}>tag2</div>
            </div>
          </div>
          <div className={notesStyle.cardBody}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deleniti ducimus quas itaque.
          </div>
          <div className={notesStyle.cardFooter}>
            this is footer
          </div>
        </div>
      </div>
      <div className={notesStyle.buttonNav}>
        <MdNoteAdd size={20}/> Add new note
      </div>
    </section>
  );
}
 
export default Notes;