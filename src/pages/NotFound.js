import { useNavigate } from 'react-router-dom'
import style from 'src/assets/styles/notFound.module.css'
import Logo from 'src/components/Logo'

const NotFound = () => {
  const navigate = useNavigate()
  function backToHomepage() {
    navigate('/')
  }

  return (
    <section className={style.container}>
      <div className={style.image} onClick={backToHomepage}>
        <Logo size={'8rem'}/>
      </div>
      <div className={style.wrapper}>
        <div className={style.firstColumn}>
          <h1>404</h1>
        </div>
        <div className={style.secondColumn}>
          <p>The page you are looking for was not found.</p>
        </div>
      </div>
    </section>
  )
}
 
export default NotFound