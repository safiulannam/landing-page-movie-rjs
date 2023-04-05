import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home name="Muhammad Safiul Annam" />
      <Footer />
    </>
  );
};

export default App;
