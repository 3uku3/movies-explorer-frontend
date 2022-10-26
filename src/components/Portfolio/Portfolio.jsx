import './portfolio.css'
import linkIcon from '../../images/arrow-link.svg';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__list'>
          <li className='portfolio__item'>
            <a className='portfolio__link' href="https://3uku3.github.io/russian-travel/" target="_blank" rel="noreferrer">
              Статичный сайт
              <img className='portfolio__link-icon' src={linkIcon} alt="Иконка ссылки" />
            </a>
          </li>
          <li className='portfolio__item'>
            <a className='portfolio__link' href="https://3uku3.github.io/lubimovka-react" target="_blank" rel="noreferrer">
              Адаптивный сайт
              <img className='portfolio__link-icon' src={linkIcon} alt="Иконка ссылки" />
            </a>
          </li>
          <li className='portfolio__item'>
            <a className='portfolio__link' href="https://3uku3.github.io/mesto/" target="_blank" rel="noreferrer">
              Одностраничное приложение
              <img className='portfolio__link-icon' src={linkIcon} alt="Иконка ссылки" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;