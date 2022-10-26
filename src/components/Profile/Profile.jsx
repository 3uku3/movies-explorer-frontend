import { useState } from 'react';
import './profile.css'

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const onClickEdit = () => {
    setIsEdit(true);
  }
  const onClickBack = () => {
    setIsEdit(false);
  }
  return (
    <main className='profile'>

      {isEdit ?
        <div className='profile__container'>
          <h2 className='profile__title'>Изменить профиль</h2>
          <form className='profile__form'>
            <p className='profile__name'>Имя</p>
            <input className='profile__input' type="text" value="Виталий" />
            <p className='profile__name'>E-mail</p>
            <input className='profile__input' type="email" value="pochta@yandex.ru" />
          </form>
          <div className='profile__buttons'>
            <button className='profile__edit' onClick={onClickEdit}>Сохранить</button>
            <button className='profile__edit' onClick={onClickBack}>Назад</button>
            <button className='profile__exit'>Выйти из аккаунта</button>
          </div>
        </div>
        :
        <div className='profile__container'>
          <h2 className='profile__title'>Привет, Виталий!</h2>
          <ul className='profile__list'>
            <li className='profile__item'>
              <p className='profile__subtitle'>Имя</p>
              <p className='profile__name'>Виталий</p>
            </li>
            <li className='profile__item'>
              <p className='profile__subtitle'>E-mail</p>
              <p className='profile__name'>pochta@yandex.ru</p>
            </li>
          </ul>
          <div className='profile__buttons'>
            <button className='profile__edit' onClick={onClickEdit}>Редактировать</button>
            <button className='profile__exit'>Выйти из аккаунта</button>
          </div>
        </div>
      }
    </main>
  );
}

export default Profile;