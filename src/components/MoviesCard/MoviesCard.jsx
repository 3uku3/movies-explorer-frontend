import './moviesCard.css';
import saveIcon from '../../images/saved.svg';
import removeIcon from '../../images/remove-icon.svg';
import {useLocation} from 'react-router-dom';

const MoviesCard = ({title, time, image, isSave}) => {
  const {pathname} = useLocation();
  let button;
  if (pathname === '/saved-movies') {
    button = <button className='movies-card__button'><img src={removeIcon} alt="Удалить" /></button>
  } else {
    button = isSave ? <button className='movies-card__button movies-card__button_active'><img src={saveIcon} alt="Сохранено" /></button>  : <button className='movies-card__button'>Сохранить</button>
  }

  return (
    <article className='movies-card'>
      <div className='movies-card__title-container'>
        <h3 className='movies-card__title'>{title}</h3>
        <p className='movies-card__time'>{time}</p>
      </div>
      <div className='movies-card__image'>
        <img className='movies-card__img' src={image} alt={title} />
      </div>
      {button}
    </article>
  );
}

export default MoviesCard;