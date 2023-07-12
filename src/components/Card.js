import  cardStyle from '../assets/styles/card.module.css';

const Card = ({ date, title, tags, body }) => {
  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.cardHeader}>
        <h2>{ date }</h2>
        <h1>{ title }</h1>
        <div className={cardStyle.tagsContainer}>
          { tags.map(tag => (
            <div className={cardStyle.tag}>{ tag }</div>
          )) }
        </div>
      </div>
      <div className={cardStyle.cardBody}>
        { body }
      </div>
      <div className={cardStyle.cardFooter}>
        this is footer
      </div>
    </div>
  );
}
 
export default Card;