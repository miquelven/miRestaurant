import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import QualityArea from "./components/QualityArea";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <QualityArea />
    </>
  );
}

export default App;
