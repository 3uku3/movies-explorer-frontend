import Logo from '../Logo/Logo';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <main className='login'>
      <form className='login__container'>
        <Logo></Logo>
        <h1 className='login__title'>Рады видеть!</h1>
        <div className='login__inputs'>
          <p className='login__text'>E-mail</p>
          <input className='login__input' type="email" required />
          <p className='login__text'>Пароль</p>
          <input className='login__input' type="password" required />
        </div>
        <div className='login__footer'>
          <button className='login__submit' type='submit'>Войти</button>
          <p className='login__register'>
            Ещё не зарегистрированы?
            <Link className='login__link' to="/signup">Регистрация</Link>
          </p>
        </div>
      </form>
    </main>
  );
}

export default Login;