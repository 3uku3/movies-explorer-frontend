import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useEffect, useState, useContext } from "react"
import { moviesApi } from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import './movies.css';
import { SavedMoviesContext } from "../../context/SavedMoviesContext"

const Movies = ({ handleSaveMovie, handleRemoveMovie }) => {
  const savedMovies = useContext(SavedMoviesContext);
  const [movies, setMovies] = useState([]);
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
      setIsEmptyInput(false);
      setIsLoaded(true);
      setMovies([]);
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
  }

  useEffect(() => {
    if (movies.length > 0) {
      setMoviesFiltered(movies.filter((movie) => {
        const nameEN = movie.nameEN.indexOf(input);
        const nameRU = movie.nameRU.indexOf(input);
        const director = movie.director.indexOf(input);
        const country = movie.country.indexOf(input);
        const year = movie.year.indexOf(input);
        const isFinded = nameEN !== -1 || nameRU !== -1 || director !== -1 || country !== -1 || year !== -1;
        if (isShortFilm) {
          return isFinded && movie.duration <= 40;
        }
        return isFinded
      }))
    }
    console.log(moviesFiltered);
  }, [movies, isShortFilm]);
  return (
    <main className="movies">
      <SearchForm
        handleSearch={handleSearch}
        onChangeInput={onChangeInput}
        handleShortCheckbox={handleShortCheckbox}
        isShort={isShortFilm}
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