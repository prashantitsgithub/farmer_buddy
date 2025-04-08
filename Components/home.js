import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles.css";

const Home = () => {
    const [showHowItWorks, setShowHowItWorks] = useState(false);

    const toggleHowItWorks = () => {
        setShowHowItWorks((prev) => !prev);
    };

    return (
        <div className="home">
            {/* Hero Section */}
            <div className="hero">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1>Empowering Farmers for a Better Tomorrow</h1>
                    <p>Your ultimate agricultural partner for modern farming solutions.</p>
                    <Link to="/register" className="cta-button">Join Us Today</Link>
                </div>
            </div>

            {/* About Section */}
            <section className="about">
                <h2>Welcome to Farmer Buddy</h2>
                <p>
                    Farmer Buddy is designed to help small farmers and agricultural students 
                    by providing real-time solutions, modern techniques, and essential resources 
                    to improve agricultural productivity.
                </p>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="feature-box">
                    <img src="/images/soil-testing.jpg" alt="Soil Testing" />
                    <h3>🌱 Soil Testing</h3>
                    <p>Check your soil health and get expert recommendations for better crops.</p>
                </div>
                <div className="feature-box">
                    <img src="/images/smart-farming.jpg" alt="Smart Farming" />
                    <h3>📊 Smart Farming</h3>
                    <p>Use technology to improve your yield and productivity efficiently.</p>
                </div>
                <div className="feature-box">
                    <img src="/images/market-trends.jpg" alt="Market Trends" />
                    <h3>📈 Market Insights</h3>
                    <p>Stay updated with real-time market prices and demand trends.</p>
                </div>
            </section>

            {/* Future of Farming */}
            <section className="future-farming">
                <h2>The Future of Farming is Here</h2>
                <p>
                    Leverage data, technology, and sustainable farming practices to ensure 
                    a profitable and eco-friendly agricultural future.
                </p>
                <button className="cta-button" onClick={toggleHowItWorks}>
                    {showHowItWorks ? "Hide Details" : "Learn More"}
                </button>
            </section>

            {/* How It Works Section (Only Visible After Clicking "Learn More") */}
            <section className={`how-it-works ${showHowItWorks ? "show" : "hide"}`}>
                <h2>🚀 How It Works</h2>
                <div className="steps-grid">
                    <div className="step">
                        <h3>🌱 Step 1: Test Your Soil</h3>
                        <p>Use our soil testing tool to determine the best crops for your land.</p>
                    </div>
                    <div className="step">
                        <h3>📊 Step 2: Get Smart Farming Insights</h3>
                        <p>Receive AI-driven recommendations for better yield and cost savings.</p>
                    </div>
                    <div className="step">
                        <h3>📈 Step 3: Monitor Market Trends</h3>
                        <p>Stay updated with real-time market prices to maximize your profits.</p>
                    </div>
                    <div className="step">
                        <h3>🚜 Step 4: Connect with Farmers</h3>
                        <p>Join a farming community to exchange knowledge and resources.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
