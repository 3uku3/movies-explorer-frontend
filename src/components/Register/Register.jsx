import Logo from '../Logo/Logo';
import './register.css';
import { Link } from 'react-router-dom';
import useFormWithValidation from '../../hooks/useFormWithValidation';

const Register = ({onRegister}) => {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const onSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  }
  return (
    <main className='register'>
      <form onSubmit={onSubmit} className='register__container'>
        <Logo></Logo>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <div className='register__inputs'>
          <p className='register__text'>Имя</p>
          <input name='name' className={errors.name  ? 'register__input register__input_error' : 'register__input'} value={values.name} onChange={handleChange} type="text" required minLength={2} maxLength={30} />
          { errors.name && <p className='register__error'>{errors.name}</p>}
          <p className='register__text'>E-mail</p>
          <input name='email' className={errors.email  ? 'register__input register__input_error' : 'register__input'} value={values.email} onChange={handleChange} type="email" required />
          { errors.email && <p className='register__error'>{errors.email}</p>}
          <p className='register__text'>Пароль</p>
          <input name='password' className={errors.password  ? 'register__input register__input_error' : 'register__input'} value={values.password} onChange={handleChange} type="password" required />
          { errors.password && <p className='register__error'>{errors.password}</p>}
        </div>
        <div className='register__footer'>
           {isValid ?  
            <button className='register__submit' type='submit'>Зарегистрироваться</button>
           : <button className='register__submit register__submit_disabled' disabled type='submit'>Зарегистрироваться</button>}
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