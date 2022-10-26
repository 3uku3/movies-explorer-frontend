import './aboutMe.css';
import photo from '../../images/photo.jpg';

const AboutMe = () => {
  return (
    <section className='about-me'>
      <div className='about-me__container'>
        <h2 className='about-me__title'>Студент</h2>
        <div className='about-me__wrapper'>
          <div className='about-me__text'>
            <h3 className='about-me__name'>Михаил</h3>
            <p className='about-me__profession'>Фронтенд-разработчик, 26 лет</p>
            <p className='about-me__about'>Я родился и живу в Санкт-Петербурге. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a className='about-me__link' href="https://github.com/3uku3" target='_blank' rel="noreferrer">Github</a>
          </div>
          <div className='about-me__image'>
            <img className='about-me__img' src={photo} alt="Фото" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;