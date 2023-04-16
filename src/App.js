import "./App.css"; 
import Navbar from "./Components/Navbar/navbar"; 
import Home from "./Components/Home/home";
import About from "./Components/About/about"; 
import Gallery from "./Components/Gallery/gallery";
import Contact from "./Components/Contact/contact"; 
import Footer from "./Components/Footer/footer"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
};

export default App;