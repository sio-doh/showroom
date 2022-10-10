import "./App.css"; 
import Navbar from "./Components/Navbar/navbar"; 
import Header from "./Components/Header/header";
import About from "./Components/About/about"; 
import Details from "./Components/Details/details";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Details />
    </>
  )
}

export default App;