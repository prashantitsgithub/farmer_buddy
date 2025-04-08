import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Opportunities from "./components/Opportunities";
import SaveMoneyTime from "./components/SaveMoneyTime";
import HowItWorks from "./components/Queries";
import CropCategory from "./components/CropCategory";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Footer from "./components/Footer";

// Import new crop pages
import VegetableFarming from "./pages/VegetableFarming";
import CerealCrops from "./pages/CerealCrops";
import FruitFarming from "./pages/FruitFarming";
import OilseedCrops from "./pages/OilseedCrops";
import CashCrops from "./pages/CashCrops";
import OtherCrops from "./pages/OtherCrops";

// query
import PesticideAdvisor from "./pages/PesticideAdvisor";

import "./styles.css";

import CropDetail from "./pages/CropDetail"; 

function App() {
    const location = useLocation(); // Get current route

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/opportunities" element={<Opportunities />} />
                <Route path="/save" element={<SaveMoneyTime />} />
                <Route path="/Queries" element={<HowItWorks />} />
                <Route path="/future" element={<CropCategory />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />

                {/* New crop category routes */}
                <Route path="/VegetableFarming" element={<VegetableFarming />} />
                <Route path="/CerealCrops" element={<CerealCrops />} />
                <Route path="/FruitFarming" element={<FruitFarming />} />
                <Route path="/OilseedCrops" element={<OilseedCrops />} />
                <Route path="/CashCrops" element={<CashCrops />} />
                <Route path="/OtherCrops" element={<OtherCrops />} />

                {/* query routes */}
                <Route path="/PesticideAdvisor" element={<PesticideAdvisor/>}/>

                <Route path="/crop/:id" element={<CropDetail />} />
            </Routes>

            {/* Show Footer only on homepage */}
            {location.pathname === "/" && <Footer />}
        </>
    );
}

// ✅ Wrap App with Router (Fix `useLocation()` issue)
export default function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}
