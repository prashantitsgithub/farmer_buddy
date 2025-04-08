import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles.css"; // Ensure correct path to styles

const Navbar = () => {
    const [showOpportunities, setShowOpportunities] = useState(false);
    const [showCropCategory, setShowCropCategory] = useState(false);
    const [showQueries, setShowQueries] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">Farmer Buddy</div>
            <ul className="nav-links">
                <li><NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
                <li><NavLink to="/save" className={({ isActive }) => (isActive ? "active" : "")}>Save Money & Time</NavLink></li>
                
                {/* Queries Dropdown (Hover) */}
                <li 
                    className="dropdown-container"
                    onMouseEnter={() => setShowQueries(true)}
                    onMouseLeave={() => setShowQueries(false)}
                >
                    <NavLink to="/queries">Queries</NavLink>
                    {showQueries && (
                        <ul className="dropdown">
                            <li><NavLink to="/PesticideAdvisor">Pesticide & Fertilizer Advisor</NavLink></li>
                        </ul>
                    )}
                </li>

                {/* Opportunities Dropdown (Hover) */}
                <li 
                    className="dropdown-container"
                    onMouseEnter={() => setShowOpportunities(true)}
                    onMouseLeave={() => setShowOpportunities(false)}
                >
                    <NavLink to="/opportunities">Opportunities</NavLink>
                    {showOpportunities && (
                        <ul className="dropdown">
                            <li><NavLink to="/connect-farmers">Connect with Farmers</NavLink></li>
                            <li><NavLink to="/grow-level">Grow Your Level</NavLink></li>
                            <li><NavLink to="/pesticides">Best Pesticides & Fertilizers</NavLink></li>
                        </ul>
                    )}
                </li>

                {/* Crop Category Dropdown (Hover) */}
                <li 
                    className="dropdown-container"
                    onMouseEnter={() => setShowCropCategory(true)}
                    onMouseLeave={() => setShowCropCategory(false)}
                >
                    <NavLink to="/crop-category">Crop Category</NavLink>
                    {showCropCategory && (
                        <ul className="dropdown">
                            <li><NavLink to="/VegetableFarming">Vegetable Farming</NavLink></li>
                            <li><NavLink to="/CerealCrops">Cereal Crops</NavLink></li>
                            <li><NavLink to="/FruitFarming">Fruit Farming</NavLink></li>
                            <li><NavLink to="/OilseedCrops">Oilseed Crops</NavLink></li>
                            <li><NavLink to="/CashCrops">Cash Crops</NavLink></li>
                            <li><NavLink to="/OtherCrops">Other Crops</NavLink></li>
                        </ul>
                    )}
                </li>
            </ul>
            <NavLink to="/login" className="login-btn">Login</NavLink>
        </nav>
    );
};

export default Navbar;
