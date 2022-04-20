import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TuBizNav from "./components/Nav";
import Footer from "./components/Footer";

import Homepage from "./pages/Homepage";
// Product page imports lines 13-21
import Products from "./pages/Products";
import VanePumps from "./pages/VanePumps";
import GearPumps from "./pages/GearPumps";
import GerolerMotors from "./pages/GerolerMotors";
import VaneMotors from "./pages/VaneMotors";
import FlowMeters from "./pages/FlowMeters";
import DirectionalControlValves from "./pages/DirectionalControlValves";
import FlowControlValves from "./pages/FlowControlValves";
import Manifolds from "./pages/Manifolds";
// Services page imports
import Services from "./pages/Services";
import PMPrograms from "./pages/PreventiveMaintenancePrograms";

import Inventory from "./pages/Inventory";
import Formulas from "./pages/Formulas";
import Interactive from "./pages/Interactive";
import ContactUs from "./pages/ContactUs";
import Thanks from "./pages/ThankYou";
import Cylinders from "./pages/Cylinders";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <TuBizNav />
        </header>

        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Homepage />} />

          {/* All Product Pages */}
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/VanePumps" element={<VanePumps />} />
          <Route path="/Products/GearPumps" element={<GearPumps />} />
          <Route path="/Products/GerolerMotors" element={<GerolerMotors />} />
          <Route path="/Products/VaneMotors" element={<VaneMotors />} />
          <Route path="/Products/FlowMeters" element={<FlowMeters />} />
          <Route
            path="/Products/DirectionalControlValves"
            element={<DirectionalControlValves />}
          />
          <Route
            path="/Products/FlowControlValves"
            element={<FlowControlValves />}
          />
          <Route path="/Products/Manifolds" element={<Manifolds />} />

          {/* Services pages */}
          <Route path="/Services" element={<Services />} />
          <Route
            path="/Services/PreventiveMaintenancePrograms"
            element={<PMPrograms />}
          />

          {/* Inventory */}
          <Route path="/Inventory" element={<Inventory />} />

          {/* Formulas */}
          <Route path="/Formulas" element={<Formulas />} />

          {/* Interactive */}
          <Route path="/Interactive" element={<Interactive />} />

          {/* Contact Us */}
          <Route path="/ContactUs" element={<ContactUs />} />

          {/* Thank you page */}
          <Route path="/ThankYou" element={<Thanks />} />

          {/* Cylinders */}
          <Route path="/Cylinders" element={<Cylinders />} />

          {/* Re-direct */}
          <Route path="*" element={<Homepage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
