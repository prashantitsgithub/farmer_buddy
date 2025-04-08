import React, { useState } from 'react';

const oilseedData = [
  {
    id: 1,
    name: "Mustard",
    image: "https://kj1bcdn.b-cdn.net/media/56232/mustard2.jpg",
    season: "Rabi",
    soilType: "Loamy, Well-drained",
    duration: "100-120 days",
    pesticides: "Imidacloprid, Mancozeb",
    growthTips: "Requires cool climate and good moisture availability.",
    video: "https://www.youtube.com/embed/v2DYdG3Lnks",
  },
  {
    id: 2,
    name: "Sunflower",
    image: "https://www.croptrust.org/fileadmin/_processed_/f/3/csm_BI5A9460_3e2b93fe82.jpg",
    season: "Kharif, Rabi",
    soilType: "Loamy, Sandy",
    duration: "90-120 days",
    pesticides: "Neem Oil, Chlorantraniliprole",
    growthTips: "Needs full sunlight and well-drained soil.",
    video: "https://www.youtube.com/embed/3bDJKcypHpo",
  },
  {
    id: 3,
    name: "Groundnut",
    image: "https://agriculture-24.com/wp-content/uploads/2023/06/Groundnut-Peanut-Production.jpg",
    season: "Kharif, Rabi",
    soilType: "Sandy Loam, Well-drained",
    duration: "100-130 days",
    pesticides: "Copper Fungicides, Neem Extract",
    growthTips: "Grows well in warm climates with moderate rainfall.",
    video: "https://www.youtube.com/embed/VtEDssqXj4A",
  },
  {
    id: 4,
    name: "Soybean",
    image: "https://cropwatch.unl.edu/sites/unl.edu.ianr.extension.cropwatch/files/media/image/soybean-hero.jpg",
    season: "Kharif",
    soilType: "Loamy, Well-drained",
    duration: "90-120 days",
    pesticides: "Carbendazim, Chlorpyrifos",
    growthTips: "Prefers warm temperatures and proper irrigation.",
    video: "https://www.youtube.com/embed/gXy5Al8a-8U",
  },
  {
    id: 5,
    name: "Sesame",
    image: "https://img.khetivyapar.com/images/news/1703067886-sesame-seed-flower-tree-field.jpg",
    season: "Kharif, Rabi, Summer",
    soilType: "Sandy Loam, Well-drained",
    duration: "80-100 days",
    pesticides: "Neem Oil, Organic Pest Control",
    growthTips: "Grows best in warm, dry climates.",
    video: "https://www.youtube.com/embed/NspRTayjS_c",
  },
  {
    id: 6,
    name: "Castor",
    image: "https://www.solidaridadnetwork.org/wp-content/uploads/2024/01/News-Asia-castor-woman-farm-1024x684.jpg",
    season: "Kharif, Rabi",
    soilType: "Well-drained Loamy",
    duration: "140-180 days",
    pesticides: "Chlorpyrifos, Neem Extract",
    growthTips: "Requires warm climate and moderate rainfall.",
    video: "https://www.youtube.com/embed/AYv2q2dxw08",
  },
  {
    id: 7,
    name: "Linseed",
    image: "https://img-cdn.krishijagran.com/37431/grow-flax-seeds.jpg",
    season: "Rabi",
    soilType: "Loamy, Well-drained",
    duration: "120-150 days",
    pesticides: "Difenoconazole, Copper Fungicides",
    growthTips: "Grows well in cool temperatures.",
    video: "https://www.youtube.com/embed/pyDPR0WzKoU",
  },
  {
    id: 8,
    name: "Coconut",
    image: "https://coconutseller.in/wp-content/uploads/2021/06/Coconut-cultivation.jpg",
    season: "All Seasons",
    soilType: "Sandy Loam, Well-drained",
    duration: "4-6 years (First Yield)",
    pesticides: "Neem Oil, Bordeaux Mixture",
    growthTips: "Requires tropical climate with ample water supply.",
    video: "https://www.youtube.com/embed/3OxrSZZBPIg",
  },
];

const OilseedFarming = () => {
  const [expandedCrop, setExpandedCrop] = useState(null);

  const toggleHowItWorks = (id) => {
    setExpandedCrop(expandedCrop === id ? null : id);
  };

  return (
    <div className="container">
      {oilseedData.map((crop) => (
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

export default OilseedFarming;
