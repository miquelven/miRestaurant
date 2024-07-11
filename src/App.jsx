import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import QualityArea from "./components/QualityArea";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menu from "./components/Menu";
import Special from "./components/Special";
import BenefitsArea from "./components/BenefitsArea";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <QualityArea />
      <Menu />
      <Special />
      <BenefitsArea />
    </>
  );
}

export default App;
