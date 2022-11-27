import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useEffect, useState, useContext } from "react"
import { moviesApi } from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import './movies.css';
import { SavedMoviesContext } from "../../context/SavedMoviesContext"

const Movies = ({ movies, setMovies, savedMoviesLoaded, setSavedMoviesLoaded, handleSaveMovie, handleRemoveMovie }) => {
  const [firstLoaded, setFirstLoaded] = useState(true);
  const savedMovies = useContext(SavedMoviesContext);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [moviesFiltered, setMoviesFiltered] = useState([]);
  const [input, setInput] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [isEmptyInput, setIsEmptyInput] = useState(false);

  const onChangeInput = (e) => {
    setInput(e.target.value);
  }

  const handleSearch = () => {
    if (input.length > 0) {
      localStorage.setItem('input', input);
      localStorage.setItem('isShortFilm', isShortFilm);
      if (movies.length > 0) {
        setMoviesFiltered(movies.filter((movie) => {
          const nameEN = movie.nameEN.indexOf(input);
          const nameRU = movie.nameRU.indexOf(input);
          const isFinded = nameEN !== -1 || nameRU !== -1;
          if (isShortFilm) {
            return isFinded && movie.duration <= 40;
          }
          return isFinded
        }))
        return;
      }

      setIsEmptyInput(false);
      setIsLoaded(true);
      setMoviesFiltered([]);
      moviesApi.getMovies().then((result) => {
        setIsLoaded(false);
        setMovies(result.map((item, index) => {
          let isSave = false;
          savedMovies.forEach((savedMovie) => {
            if (savedMovie.movieId === item.id) {
              isSave = true;
            }
          })
          return {
            key: index,
            country: item.country,
            director: item.director,
            duration: item.duration,
            year: item.year,
            description: item.description,
            image: 'https://api.nomoreparties.co/' + item.image.url,
            trailerLink: item.trailerLink,
            thumbnail: 'https://api.nomoreparties.co/' + item.image.url,
            movieId: item.id,
            nameEN: item.nameEN,
            nameRU: item.nameRU,
            isSave: isSave
          }

        }));

        setAlertText('Ничего не найдено');
      }).catch(() => {
        setIsLoaded(false);
        setAlertText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
    } else {
      setAlertText('Нужно ввести ключевое слово');
      setIsEmptyInput(true);
    }
  }

  const handleShortCheckbox = (e) => {
    setIsShortFilm(e.target.checked);
    localStorage.setItem('isShort', e.target.checked);
  }

  useEffect(() => {
    if (movies.length > 0) {
      setMoviesFiltered(movies.filter((movie) => {
        const nameEN = movie.nameEN.indexOf(input);
        const nameRU = movie.nameRU.indexOf(input);
        const isFinded = nameEN !== -1 || nameRU !== -1;
        if (isShortFilm) {
          return isFinded && movie.duration <= 40;
        }
        return isFinded
      }))
    }
  }, [movies, isShortFilm]);

  useEffect(() => {
    setInput(window.localStorage.getItem('input'));
    let isShort = false;
    if (window.localStorage.getItem('isShortFilm') === "true") {
      setIsShortFilm(true);
      isShort = true;
    } else {
      setIsShortFilm(false);
      isShort = false
    }
    if (movies.length > 0) {
      setMoviesFiltered(movies.filter((movie) => {
        const nameEN = movie.nameEN.indexOf(window.localStorage.getItem('input'));
        const nameRU = movie.nameRU.indexOf(window.localStorage.getItem('input'));
        const isFinded = nameEN !== -1 || nameRU !== -1;
        if (isShort) {
          return isFinded && movie.duration <= 40;
        }
        return isFinded
      }))
    }
  }, [])
  return (
    <main className="movies">
      <SearchForm
        handleSearch={handleSearch}
        onChangeInput={onChangeInput}
        input={input}
        handleShortCheckbox={handleShortCheckbox}
        isShort={isShortFilm}
        savedMoviesLoaded={savedMoviesLoaded}
        setSavedMoviesLoaded={setSavedMoviesLoaded}
      ></SearchForm>
      {isLoaded && <Preloader></Preloader>}

      {moviesFiltered.length > 0 && !isEmptyInput
        ?
        <MoviesCardList
          handleSaveMovie={handleSaveMovie}
          handleRemoveMovie={handleRemoveMovie}
          movies={moviesFiltered}
        ></MoviesCardList>
        :
        <p className="movies__alert">{alertText}</p>
      }
    </main>
  );
}

export default Movies;