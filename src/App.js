import "./App.css";
import Contact from "./components/Contact/contact";
import NavBar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Location from "./components/Locations/location";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Service from "./components/Service/service"; // Corrected import
import Fleets from "./components/Fleets/fleets";
import Pricing from "./components/Pricing/pricing";
import FloatButtons from "./components/Floats/Float";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/locations" element={<Location />} />
            <Route exact path="/services" element={<Service />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/fleets" element={<Fleets />} />
            <Route exact path="/pricing" element={<Pricing />} />
          </Routes>
        </div>
        <Footer />
        <FloatButtons/>
      </Router>
    </>
  );
}

export default App;
