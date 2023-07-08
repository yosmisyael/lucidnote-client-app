import  cardStyle from '../assets/styles/card.module.css';

const Card = () => {
  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.cardHeader}>
        <h2>21 March</h2>
        <h1>This is card title</h1>
        <div className={cardStyle.tagsContainer}>
          <div className={cardStyle.tag}>tag1</div>
          <div className={cardStyle.tag}>tag2</div>
        </div>
      </div>
      <div className={cardStyle.cardBody}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deleniti ducimus quas itaque.
      </div>
      <div className={cardStyle.cardFooter}>
        this is footer
      </div>
    </div>
  );
}
 
export default Card;