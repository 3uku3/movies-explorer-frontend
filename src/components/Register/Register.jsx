import Logo from '../Logo/Logo';
import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <main className='register'>
      <form className='register__container'>
        <Logo></Logo>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <div className='register__inputs'>
          <p className='register__text'>Имя</p>
          <input className='register__input' type="email" required />
          <p className='register__text'>E-mail</p>
          <input className='register__input' type="email" required />
          <p className='register__text'>Пароль</p>
          <input className='register__input' type="password" required />
        </div>
        <div className='register__footer'>
          <button className='register__submit' type='submit'>Зарегистрироваться</button>
          <p className='register__register'>
            Уже зарегистрированы?
            <Link className='register__link' to="/signin">Войти</Link>
          </p>
        </div>
      </form>
    </main>
  );
}

export default Register;