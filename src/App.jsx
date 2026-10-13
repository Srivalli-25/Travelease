import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Packages from "./pages/Packages";
import Hotels from "./pages/Hotels";
import Bookings from "./pages/Bookings";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Favorites from "./pages/Favorites";


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/destinations" element={<Destinations />}/>
        <Route path="/destinations/:id" element={<DestinationDetails />}/>
        <Route path="/packages" element={<Packages />}/>
        <Route path="/hotels" element={<Hotels />}/>
        <Route path="/bookings" element={<Bookings />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="*" element={<NotFound />}/>

      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}
