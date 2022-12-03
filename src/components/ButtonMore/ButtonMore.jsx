import './buttonMore.css';

const ButtonMore = ({handleClickMore}) => {
  return (
    <div className='button-more'>
      <button onClick={handleClickMore} className='button-more__button'>
        Ещё
      </button>
    </div>
  );
}

export default ButtonMore;