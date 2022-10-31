import './notFound.css';
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="not-found">
      <div className='not-found__container'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__text'>Страница не найдена</p>
      </div>
      <Link className='not-found__link' to='/movies'>Назад</Link>
    </main>
  );
}

export default NotFound;