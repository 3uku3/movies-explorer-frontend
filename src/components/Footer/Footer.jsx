import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__name'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__wrapper'>
          <p className='footer__copy'>© 2020</p>
          <ul className='footer__links'>
            <li className='footer__link-item'>
              <a className='footer__link' href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className='footer__link-item'>
              <a className='footer__link' href="https://github.com/3uku3" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;