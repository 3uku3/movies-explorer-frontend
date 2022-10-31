import MoviesCard from '../MoviesCard/MoviesCard';
import './moviesCardList.css';
import ButtonMore from '../ButtonMore/ButtonMore';
import { useEffect, useLayoutEffect, useState } from 'react';

const MoviesCardList = ({ movies }) => {
  const [visibleMovies, setVisibleMovies] = useState(12);
  const [renderedMovires, setRenderedMovies] = useState();
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', () => {
      clearTimeout(window.localStorage.getItem('timer'));
      window.localStorage.setItem('timer', setTimeout(updateSize, 1000));
    });
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 980) {
      if (visibleMovies % 3 !== 0) {
        setVisibleMovies(visibleMovies + (3 - visibleMovies % 3));
      }
    }
    else if (window.innerWidth >= 668) {
      if (visibleMovies % 2 !== 0) {
        setVisibleMovies(visibleMovies + visibleMovies % 2);
      }
    }
    else {
      if (visibleMovies % 2 !== 0) {
        setVisibleMovies(visibleMovies + visibleMovies % 2);
      }
    }
  },[size])
  
  useEffect(() => {
    if (window.innerWidth >= 980) {
      setVisibleMovies(12);
    }
    else if (window.innerWidth >= 668) {
      setVisibleMovies(8);
    }
    else {
      setVisibleMovies(5);
    }
  }, [movies])



  const handleClickMore = () => {
    let countLoaded;
    if (window.innerWidth >= 980) {
      countLoaded = 3;
    }
    else if (window.innerWidth >= 668) {
      countLoaded = 2;
    }
    else {
      countLoaded = 2;
    }
    setVisibleMovies(visibleMovies + countLoaded);
  }
  useEffect(() => {
    setRenderedMovies(movies.map((movie, index) => {
      return <MoviesCard
        key={index}
        title={movie.nameRU}
        time={movie.duration}
        image={movie.image.url}
        isSave={movie.isSave}
      ></MoviesCard>
    }).filter((movie, index) => {
      if (visibleMovies < index + 1) {
        return false;
      }
      return true
    })
    )
  }
    , [visibleMovies, movies])
  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        {renderedMovires}
      </div>
      {visibleMovies < movies.length ? <ButtonMore
        handleClickMore={handleClickMore}
      ></ButtonMore>
    : <div></div>}
      
    </section>
  );
}

export default MoviesCardList;