import { Link } from "react-router-dom";
import './navigation.css'

const Navigation = () => {
  return (
    <div className="navigation">
      <Link className="navigation__movies" to='/movies'>Фильмы</Link>
      <Link className="navigation__saved-movies" to='/saved-movies'>Сохранённые фильмы</Link>
    </div>
  )
}

export default Navigation;