import './moviesCard.css';
import saveIcon from '../../images/saved.svg';
import removeIcon from '../../images/remove-icon.svg';
import {useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';

const MoviesCard = ({movie, handleSaveMovie, handleRemoveMovie}) => {
  const [isSave, setIsSave] = useState(movie.isSave);
  const {pathname} = useLocation();
  const onClickSave = () => {
    handleSaveMovie(movie.country, movie.director, movie.duration, movie.year, movie.description, movie.image, movie.trailerLink, movie.thumbnail, movie.movieId, movie.nameRU, movie.nameEN)
    .then(() => {
      setIsSave(true)
    })
  }
  const onClickRemove = () => {
    handleRemoveMovie(movie.movieId)
    .then(() => {
      setIsSave(false);
    })
  }
  useEffect (() => {
  })
  let button;
  if (pathname === '/saved-movies') {
    button = <button onClick={onClickRemove} className='movies-card__button'><img src={removeIcon} alt="Удалить" /></button>
  } else {
    button = isSave === true ? <button onClick={onClickRemove} className='movies-card__button movies-card__button_active'><img src={saveIcon} alt="Сохранено" /></button>  : <button onClick={onClickSave} className='movies-card__button'>Сохранить</button>
  }

  return (
    <article className='movies-card'>
      <div className='movies-card__title-container'>
        <h3 className='movies-card__title'>{movie.nameRU}</h3>
        <p className='movies-card__time'>{movie.duration + ' мин.'}</p>
      </div>
      <div className='movies-card__image'>
        <img className='movies-card__img' src={movie.image} alt={movie.nameRU} />
      </div>
      {button}
    </article>
  );
}

export default MoviesCard;