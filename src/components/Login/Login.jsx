import Logo from '../Logo/Logo';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import useFormWithValidation from '../../hooks/useFormWithValidation';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const onSubmit = (e) => {
    e.preventDefault();
    onLogin(values).then(() => {
      navigate('/movies');
    }
    ).catch((e) => {
      switch (e) {

      }
    });
  }
  return (
    <main className='login'>
      <form onSubmit={onSubmit} className='login__container'>
        <Logo></Logo>
        <h1 className='login__title'>Рады видеть!</h1>
        <div className='login__inputs'>
          <p className='login__text'>E-mail</p>
          <input name='email' className={errors.email ? 'login__input login__input_error' : 'login__input'} value={values.email} onChange={handleChange} type="email" required />
          {errors.email && <p className='login__error'>{errors.email}</p>}
          <p className='login__text'>Пароль</p>
          <input name='password' className={errors.email ? 'login__input login__input_error' : 'login__input'} value={values.password} onChange={handleChange} type="password" required />
          {errors.password && <p className='login__error'>{errors.password}</p>}
        </div>
        <div className='login__footer'>
          {isValid ?
            <button className='login__submit' type='submit'>Войти</button>
            :
            <button className='login__submit login__submit_disabled' disabled type='submit'>Войти</button>
          }
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