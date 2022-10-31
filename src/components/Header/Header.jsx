import Logo from "../Logo/Logo"
import {useLocation} from 'react-router-dom'
import Navigation from "../Navigation/Navigation";
import Account from "../Account/Account";
import './header.css';


const Header = ({className}) => {
  const {pathname} = useLocation();
  let navigation;
  if (pathname !== '/') {
    navigation = <Navigation></Navigation>
  }
  console.log(pathname);
  return (
    <header className={`header ${className ? className : ''}`}>
      <div className="header__container">
        <Logo></Logo>
          {navigation}
        <Account></Account>
      </div>
    </header>
  )
}

export default Header;