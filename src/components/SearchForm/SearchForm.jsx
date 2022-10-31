import searchIcon from '../../images/icon-search.svg';
import searchArrow from '../../images/arrow-search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './searchForm.css';
import { useState } from 'react';

const SearchForm = ({handleSearch, onChangeInput, handleShortCheckbox, isShort}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  }
  return (
    <section className="search-form">
      <div className="search-form__container">
        <form onSubmit={onSubmit} className="search-form__form">
          <img className="search-form__icon" src={searchIcon} alt="Поиск" />
          <input className='search-form__input' onChange={onChangeInput} type="text" placeholder='Фильм' />
          <button className='search-form__button' type='submit'><img className='search-form__button-img' src={searchArrow} alt="Поиск" /></button>
          <FilterCheckbox
            handleShortCheckbox={handleShortCheckbox}
            isShort={isShort}
          ></FilterCheckbox>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;