import { useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './savedMovies.css';
import image from '../../images/movies-card-img.jpg';
import SearchForm from '../SearchForm/SearchForm';

const SavedMovies = () => {
  const [movies, setMovies] = useState([
    {
    title: "В погоне за Бенкси",
    time: "27 минут",
    image: image,
    isSave: true
    },
    {
    title: "В погоне за Бенкси",
    time: "27 минут",
    image: image,
    isSave: true
    },
    {
    title: "В погоне за Бенкси",
    time: "27 минут",
    image: image,
    isSave: true
    },
    {
    title: "В погоне за Бенкси",
    time: "27 минут",
    image: image,
    isSave: true
    },
  ])
  return (
    <main className='saved-movies'>
      <SearchForm></SearchForm>
      <MoviesCardList
        movies={movies}
      >
      </MoviesCardList>
    </main>
  );
}

export default SavedMovies;