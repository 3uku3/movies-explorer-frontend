import MoviesCard from '../MoviesCard/MoviesCard';
import './moviesCardList.css';
import ButtonMore from '../ButtonMore/ButtonMore';

const MoviesCardList = ({ movies }) => {
  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        {movies.map((movie, index) => {
          return (<MoviesCard
            key={index}
            title={movie.title}
            time={movie.time}
            image={movie.image}
            isSave={movie.isSave}
          ></MoviesCard>)
        })}
      </div>
      <ButtonMore></ButtonMore>
    </section>
  );
}

export default MoviesCardList;