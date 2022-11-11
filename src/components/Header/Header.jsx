import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation";
import Account from "../Account/Account";
import './header.css';


const Header = ({className, loggedIn}) => {
  let navigation;
  if (loggedIn) {
    navigation = <Navigation></Navigation>
  }
  return (
    <header className={`header ${className ? className : ''}`}>
      <div className="header__container">
        <Logo></Logo>
          {navigation}
        <Account loggedIn={loggedIn}></Account>
      </div>
    </header>
  )
}

export default Header;