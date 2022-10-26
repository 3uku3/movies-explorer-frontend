import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Promo from "../Promo/Promo";
import Portfolio from "../Portfolio/Portfolio";
import Techs from "../Techs/Techs";

const Main = () => {
  return(
    <main className="main">
      <Promo></Promo>
      <AboutProject></AboutProject>
      <Techs></Techs>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
    </main>
  );
}

export default Main;