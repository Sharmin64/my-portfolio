import "./App.css";
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div>
        <Header />
        <Banner />
        <Navbar />
        <Services />
        <Projects />
        <AboutMe />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
