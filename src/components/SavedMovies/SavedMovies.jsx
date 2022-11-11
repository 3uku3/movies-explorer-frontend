import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useContext, useEffect, useState } from 'react';
import './savedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import { SavedMoviesContext } from "../../context/SavedMoviesContext"

const SavedMovies = ({ handleRemoveMovie }) => {
  const savedMovies = useContext(SavedMoviesContext);
  const [movies, setMovies] = useState(savedMovies);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [input, setInput] = useState('');
  const [alertText, setAlertText] = useState('');

  const onChangeInput = (e) => {
    setInput(e.target.value);
  }
  const handleShortCheckbox = (e) => {
    setIsShortFilm(e.target.checked);
  }

  const handleSearch = () => {
    if (input.length > 0 || isShortFilm) {
      setMovies(savedMovies.filter((movie) => {
        const nameEN = movie.nameEN.indexOf(input);
        const nameRU = movie.nameRU.indexOf(input);
        const director = movie.director.indexOf(input);
        const country = movie.country.indexOf(input);
        const year = movie.year.indexOf(input);
        const isFinded = nameEN !== -1 || nameRU !== -1 || director !== -1 || country !== -1 || year !== -1;
        if (isShortFilm) {
          return isFinded && movie.duration <= 40;
        }
        return isFinded;
      }))
    } else {
      setMovies(savedMovies);
    }
  }

  useEffect(() => {
    if (movies.length === 0) {
      setAlertText('Ничего не найдено');
    }
  }, [movies])
  useEffect(() => {
    handleSearch();
  }, [savedMovies])

  return (
    <main className='saved-movies'>
      <SearchForm
        handleSearch={handleSearch}
        onChangeInput={onChangeInput}
        handleShortCheckbox={handleShortCheckbox}
      ></SearchForm>
      {movies.length > 0 
        ?
        <MoviesCardList handleRemoveMovie={handleRemoveMovie} movies={movies}>
        </MoviesCardList>
        :
        <p className="movies__alert">{alertText}</p>
      }

    </main>
  );
}

export default SavedMovies;