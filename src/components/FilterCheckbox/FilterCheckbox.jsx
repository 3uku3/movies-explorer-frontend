import './filterCheckbox.css';

const FilterCheckbox = ({handleShortCheckbox, isShort}) => {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label" htmlFor="filter-checkbox">
        <input onChange={handleShortCheckbox} value={isShort} checked={isShort} className="filter-checkbox__input" type="checkbox" name="filter-checkbox" id="filter-checkbox" />
        <div className="filter-checkbox__checkbox">
          <div className="filter-checkbox__circle"></div>
        </div>
        <p className="filter-checkbox__text">Короткометражки</p>
      </label>
    </div>
  );
}

export default FilterCheckbox;