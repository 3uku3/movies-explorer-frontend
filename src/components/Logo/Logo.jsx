import { Link } from "react-router-dom";
import logo from "../../images/logo.png"

const Logo = () => {
  return (
    <Link className="logo" to='/'>
      <img src={logo} alt="Логотип" />
    </Link>
  )
}
export default Logo;