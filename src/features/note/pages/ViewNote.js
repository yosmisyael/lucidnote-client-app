import style from "../assets/viewNote.module.css"

const ViewNote = () => {
  return (
    <section className={style.container}>
      <div className={style.navbar}></div>
      <div className={style.wrapper}>
        <div className={style.header}></div>
        <div className={style.tagsContainer}></div>
        <div className={style.body}></div>
      </div>
    </section>
  )
}
 
export default ViewNote
