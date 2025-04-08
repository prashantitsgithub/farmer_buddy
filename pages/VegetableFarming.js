import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const cropData = [
  {
    id: 1,
    name: "Tomato",
    image: "https://www.agrifarming.in/wp-content/uploads/The-Complete-Guide-to-Tomato-Farming-1.jpg",
    season: "Rabi, Kharif",
    soilType: "Loamy, Sandy",
    duration: "90-120 days",
    pesticides: "Neem Oil, Insecticidal Soap",
    growthTips: "Plant in well-drained soil with full sun.",
    video: "https://www.youtube.com/embed/QsXZzflxw3I",
  },
  {
    id: 2,
    name: "Cucumber",
    image: "https://thumbs.dreamstime.com/z/cucumber-growing-farm-cucumber-growing-farm-background-159064412.jpg",
    season: "Summer",
    soilType: "Loamy, Well-drained",
    duration: "50-70 days",
    pesticides: "Copper-based Fungicides",
    growthTips: "Keep soil moist and provide support for vines.",
    video: "https://www.youtube.com/embed/FIk6sV3mksw",
  },
  {
    id: 3,
    name: "Brinjal (Eggplant)",
    image: "https://housing.com/news/wp-content/uploads/2022/11/brinjal-feature-compressed.jpg",
    season: "Kharif, Rabi",
    soilType: "Well-drained Loamy",
    duration: "100-140 days",
    pesticides: "Chlorantraniliprole, Neem Oil",
    growthTips: "Needs warm climate and good drainage.",
    video: "https://www.youtube.com/embed/KdzGmLdyfJ4",
  },
  {
    id: 4,
    name: "Capsicum",
    image: "https://i.ytimg.com/vi/QhrUxLakJTI/maxresdefault.jpg",
    season: "Rabi, Summer",
    soilType: "Sandy Loam, Well-drained",
    duration: "120-150 days",
    pesticides: "Imidacloprid, Neem Extract",
    growthTips: "Grows best in greenhouses or warm environments.",
    video: "https://www.youtube.com/embed/XRYHLJ4RWU4",
  },
  {
    id: 5,
    name: "Carrot",
    image: "https://kj1bcdn.b-cdn.net/media/25121/crop.png",
    season: "Winter",
    soilType: "Sandy Loam, Deep Loose",
    duration: "80-100 days",
    pesticides: "Chlorpyrifos, Organic Pest Control",
    growthTips: "Prefers cool climate and deep, loose soil.",
    video: "https://www.youtube.com/embed/RV4ZyYN_8_o",
  },
  {
    id: 6,
    name: "Onion",
    image: "https://www.agrifarming.in/wp-content/uploads/2018/03/Growing-Organic-Onions.-e1523106941962.jpg",
    season: "Rabi",
    soilType: "Loamy, Well-drained",
    duration: "100-120 days",
    pesticides: "Sulfur-based Fungicides",
    growthTips: "Needs well-drained soil and full sunlight.",
    video: "https://www.youtube.com/embed/Lx8nH6MmGlw",
  },
  {
    id: 7,
    name: "Potato",
    image: "https://th.bing.com/th/id/OIP.UMguHazombiHE0GWCDSY2wHaFj?rs=1&pid=ImgDetMain",
    season: "Rabi, Kharif",
    soilType: "Well-drained Sandy Loam",
    duration: "80-120 days",
    pesticides: "Mancozeb, Copper Fungicide",
    growthTips: "Grows well in cool temperatures with loose soil.",
    video: "https://www.youtube.com/embed/q2wfjXyULhk",
  },
  {
    id: 8,
    name: "Cauliflower",
    image: "https://i.ytimg.com/vi/1LwBIzmCwOo/maxresdefault.jpg",
    season: "Winter",
    soilType: "Fertile, Well-drained Loam",
    duration: "90-120 days",
    pesticides: "Bacillus thuringiensis, Neem Spray",
    growthTips: "Thrives in cool climate, needs regular irrigation.",
    video: "https://www.youtube.com/embed/WPRu0-3OxXM",
  },
];

const VegetableFarming = () => {
  const [expandedCrop, setExpandedCrop] = useState(null);

  const toggleHowItWorks = (id) => {
    setExpandedCrop(expandedCrop === id ? null : id);
  };

  return (
    <div className="container">
      {cropData.map((crop) => (
        <div key={crop.id} className="card">
          <img src={crop.image} alt={crop.name} />
          <div className="card-content">
            <h2>{crop.name}</h2>
            <button className="cta-button" onClick={() => toggleHowItWorks(crop.id)}>
              {expandedCrop === crop.id ? "Hide Details" : "Learn More"}
            </button>
            <p><strong>Season:</strong> {crop.season}</p>
            <p><strong>Pesticides:</strong> {crop.pesticides}</p>

            {expandedCrop === crop.id && (
              <div className="details">
                <p><strong>Growth Tips:</strong> {crop.growthTips}</p>
                <p><strong>Duration:</strong> {crop.duration}</p>
                <p><strong>Pesticides:</strong> {crop.pesticides}</p>
                <div className="video-container">
                  <iframe 
                    width="100%" 
                    height="200" 
                    src={crop.video} 
                    title={crop.name} 
                    frameBorder="0" 
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VegetableFarming;
