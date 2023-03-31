import "./App.css"; 
import Navbar from "./Components/Navbar/navbar"; 
import Header from "./Components/Header/header";
import About from "./Components/About/about"; 
import Details from "./Components/Details/details";
import SecondHeader from "./Components/Second_Header/second"; 
import Footer from "./Components/Footer/footer"; 
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <About />
      <Details /> 
      <SecondHeader />
      <Footer />
    </BrowserRouter>
  )
}

export default App;