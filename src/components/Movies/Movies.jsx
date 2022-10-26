import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import {useState} from "react"
import image from '../../images/movies-card-img.jpg';


const Movies = () => {
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
    {
    title: "В погоне за Бенкси",
    time: "27 минут",
    image: image,
    isSave: false
    },
    {
    title: "В погоне за Бенкси",
    time: "27 минут",
    image: image,
    isSave: false
    },
    {
    title: "В погоне за Бенкси",
    time: "27 минут",
    image: image,
    isSave: false
    },
    {
    title: "В погоне за Бенкси",
    time: "27 минут",
    image: image,
    isSave: false
    },
    {
    title: "В погоне за Бенкси",
    time: "27 минут",
    image: image,
    isSave: false
    },
    {
    title: "В погоне за Бенкси",
    time: "27 минут",
    image: image,
    isSave: false
    },
  ])
  return (
    <main className="movies">
      <SearchForm></SearchForm>
      <MoviesCardList
        movies={movies}
      ></MoviesCardList>
    </main>
  );
}

export default Movies;