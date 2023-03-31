import "./App.css"; 
import Navbar from "./Components/Navbar/navbar"; 
import Home from "./Components/Home/home";
import About from "./Components/About/about"; 
import Gallery from "./Components/Gallery/gallery";
import Contact from "./Components/Contact/contact"; 
import Footer from "./Components/Footer/footer"; 
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Gallery /> 
      <Contact />
      <Footer />
    </BrowserRouter>
  )
}

export default App;