import { useContext, useState } from 'react';
import './profile.css'
import { CurrentUserContext } from "../../context/CurrentUserContext"
import useFormWithValidation from '../../hooks/useFormWithValidation';

const Profile = ({onEdit, handleLogout}) => {
  const user = useContext(CurrentUserContext);
  const [message, setMessage] = useState('');
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [isEdit, setIsEdit] = useState(false);
  const onClickEdit = (e) => {
    setIsEdit(true);
    setMessage('');
  }
  const onClickBack = () => {
    setIsEdit(false);
  }
  const onClickLogout = () => {
    handleLogout()
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onEdit(values).then(() => {
      setMessage('Данные сохранены');
    });
    setIsEdit(false);
  }
  return (
    <main className='profile'>

      {isEdit ?
        <div className='profile__container'>
          <h2 className='profile__title'>Изменить профиль</h2>
          <form onSubmit={onSubmit} className='profile__form'>
            <p className='profile__name'>Имя</p>
            <input name='name' className={errors.name  ? 'profile__input profile__input_error' : 'profile__input'} onChange={handleChange} type="text" value={values.name} required minLength={2} maxLength={30} />
            { errors.name && <p className='profile__error'>{errors.name}</p>}
            <p className='profile__name'>E-mail</p>
            <input name='email' className={errors.name  ? 'profile__input profile__input_error' : 'profile__input'} onChange={handleChange} type="email" value={values.email} required />
            { errors.email && <p className='profile__error'>{errors.email}</p>}
          <div className='profile__buttons'>
          {isValid ?  
            <button className='profile__edit' type='submit'>Сохранить</button>
           : <button className='profile__edit profile__edit_disabled' disabled type='submit'>Сохранить</button>}
            <button className='profile__edit' onClick={onClickBack}>Назад</button>
            <button className='profile__exit' onClick={onClickLogout}>Выйти из аккаунта</button>
          </div>
          </form>

        </div>
        :
        <div className='profile__container'>
          <h2 className='profile__title'>Привет, {user.name}!</h2>
          <p className='profile__message'>{message}</p>
          <ul className='profile__list'>
            <li className='profile__item'>
              <p className='profile__subtitle'>Имя</p>
              <p className='profile__name'>{user.name}</p>
            </li>
            <li className='profile__item'>
              <p className='profile__subtitle'>E-mail</p>
              <p className='profile__name'>{user.email}</p>
            </li>
            
          </ul>
          <div className='profile__buttons'>
            <button className='profile__edit' onClick={onClickEdit}>Редактировать</button>
            <button className='profile__exit' onClick={onClickLogout}>Выйти из аккаунта</button>
          </div>
        </div>
      }
    </main>
  );
}

export default Profile;