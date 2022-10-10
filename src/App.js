import "./App.css"; 
import Navbar from "./Components/Navbar/navbar"; 
import Header from "./Components/Header/header";
import About from "./Components/About/about"; 
import Details from "./Components/Details/details";
import SecondHeader from "./Components/Second_Header/second"; 
import Footer from "./Components/Footer/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Details /> 
      <SecondHeader />
      <Footer />
    </>
  )
}

export default App;