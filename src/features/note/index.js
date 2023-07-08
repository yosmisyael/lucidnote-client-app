import createNote from './assets/createnote.module.css';
import { Input } from '../../components/FormComponent';

const CreateNotes = () => {
  return (
    <section className={createNote.container}>
      <div className={createNote.note}>
        <form>
          <Input data={{inputName: 'title', inputType: 'text', placeholder: 'title here'}} />
          <div className={createNote.tagsContainer}></div>
        </form>
      </div>
    </section>
  );
}
 
export default CreateNotes;