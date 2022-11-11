import { Link, NavLink } from "react-router-dom";
import accountIcon from "../../images/accoun-icon.svg"
import { useLocation } from 'react-router-dom';
import './account.css';
import closeIcon from '../../images/close.svg';
import { useEffect, useState } from "react";


const Account = ({loggedIn}) => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  let account;
  let activeClassName = "account__link_active";
  if (loggedIn) {
    account = <Link className="account__profile" to="/profile">Аккаунт <div className="account__image"><img className="account__img" src={accountIcon} alt="Аккаунт" /></div></Link>
  } else {
    account = <><Link className="account__register" to="/signup">Регистрация</Link> <Link className="account__login" to="/signin">Войти</Link></>
  }
  return (
    <div className="account">
      <div className="account__container">
        {account}
      </div>
      <div className="acoount__menu">
        <button onClick={onClickMenu} className="account__button"><div className="account__burger"></div></button>
        <div onClick={onClickMenu} className={"account__menu-wrapper " + (isMenuOpen ? 'account__menu-wrapper_active' : '')} >
          <div className="account__menu-container">
            <button onClick={onClickMenu} className="account__close"><img className="account__close-img" src={closeIcon} alt="Закрыть" /></button>
            <div className="account__links">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "account__link " + activeClassName : "account__link"
                }
              >
                Главная
              </NavLink>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive ? "account__link " + activeClassName : "account__link"
                }
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                className={({ isActive }) =>
                  isActive ? "account__link " + activeClassName : "account__link"
                }
              >
                Сохранённые фильмы
              </NavLink>
            </div>
            <div className="account__container">
            <Link className="account__profile" to="/profile">Аккаунт <div className="account__image"><img className="account__img" src={accountIcon} alt="Аккаунт" /></div></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account;