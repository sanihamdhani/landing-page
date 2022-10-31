import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import MainBox from "./components/MainBox";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Main />
      <MainBox />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
