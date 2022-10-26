import searchIcon from '../../images/icon-search.svg';
import searchArrow from '../../images/arrow-search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './searchForm.css';

const SearchForm = () => {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form">
          <img className="search-form__icon" src={searchIcon} alt="Поиск" />
          <input className='search-form__input' type="text" placeholder='Фильм' required />
          <button className='search-form__button' type='submit'><img className='search-form__button-img' src={searchArrow} alt="Поиск" /></button>
          <FilterCheckbox></FilterCheckbox>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;