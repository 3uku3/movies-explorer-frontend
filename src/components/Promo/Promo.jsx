import promoImage from '../../images/promo.png'
import './promo.css'

const Promo = () => {
  return (
    <div className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <div className="promo__image">
          <img className="promo__img" src={promoImage} alt="Баннер" />
        </div>
      </div>
    </div>
  )
}

export default Promo;