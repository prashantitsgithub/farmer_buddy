import React, { useState } from 'react';

const cerealData = [
  {
    id: 1,
    name: "Wheat",
    image: "https://4.bp.blogspot.com/-12HPxjByUV4/V8RViLMnh8I/AAAAAAAAAVQ/HuNtX5JaT1sMYHANVus_ecfN_q1g0YAAwCLcB/s1600/IMG_3942.JPG",
    season: "Rabi",
    soilType: "Well-drained Loamy",
    duration: "120-150 days",
    pesticides: "Carbendazim, Propiconazole",
    growthTips: "Requires cool temperatures and moderate rainfall.",
    video: "https://www.youtube.com/embed/oVwA9K4yG1s",
  },
  {
    id: 2,
    name: "Rice",
    image: "https://wallpapercave.com/wp/wp7520970.jpg",
    season: "Kharif",
    soilType: "Clayey, Loamy",
    duration: "100-180 days",
    pesticides: "Chlorpyrifos, Carbofuran",
    growthTips: "Needs standing water for initial growth stages.",
    video: "https://www.youtube.com/embed/wvM_XOTgfsM",
  },
  {
    id: 3,
    name: "Maize",
    image: "https://juriscopelegaltips.com.ng/wp-content/uploads/2021/07/maize-farm.jpg",
    season: "Kharif, Rabi",
    soilType: "Loamy, Well-drained",
    duration: "90-120 days",
    pesticides: "Lambda-Cyhalothrin, Imidacloprid",
    growthTips: "Prefers warm climate and well-drained soil.",
    video: "https://www.youtube.com/embed/Z2G8TgVZk2o",
  },
  {
    id: 4,
    name: "Barley",
    image: "https://i0.wp.com/startuptipsdaily.com/wp-content/uploads/2020/02/how-to-start-barley-farming-in-nigeria-africa.jpg?resize=1024%2C768&ssl=1",
    season: "Rabi",
    soilType: "Loamy, Well-drained",
    duration: "120-140 days",
    pesticides: "Mancozeb, Propiconazole",
    growthTips: "Grows best in cool and dry conditions.",
    video: "https://www.youtube.com/embed/1xjqS03GoXI",
  },
  {
    id: 5,
    name: "Millet (Bajra)",
    image: "https://www.agrifarming.in/wp-content/uploads/2019/10/Comp2.jpg",
    season: "Kharif",
    soilType: "Sandy, Well-drained",
    duration: "80-120 days",
    pesticides: "Thiamethoxam, Neem Oil",
    growthTips: "Drought-resistant, grows well in dry conditions.",
    video: "https://www.youtube.com/embed/UqQkVlfSc0g",
  },
  {
    id: 6,
    name: "Sorghum (Jowar)",
    image: "https://th.bing.com/th/id/OIP.r7686J4ypBini5CZbxZTNwHaEf?rs=1&pid=ImgDetMain",
    season: "Kharif",
    soilType: "Loamy, Well-drained",
    duration: "100-120 days",
    pesticides: "Chlorpyrifos, Acetamiprid",
    growthTips: "Grows well in semi-arid climates with less water.",
    video: "https://www.youtube.com/embed/E5Vc-4ax2jU",
  },
  {
    id: 7,
    name: "Oats",
    image: "https://stmaaprodfwsite.blob.core.windows.net/assets/sites/1/2022/05/Oats-1882013-5317_C_TS.jpg",
    season: "Rabi",
    soilType: "Loamy, Well-drained",
    duration: "90-120 days",
    pesticides: "Tricyclazole, Sulfur Fungicides",
    growthTips: "Thrives in cool and moist environments.",
    video: "https://www.youtube.com/embed/Yz9dPjj4Keo",
  },
  {
    id: 8,
    name: "Rye",
    image: "https://thumbs.dreamstime.com/b/rye-field-poland-organic-fields-bieszczady-europe-agriculture-theme-ears-57778764.jpg",
    season: "Winter",
    soilType: "Well-drained Loamy",
    duration: "130-160 days",
    pesticides: "Difenoconazole, Copper Fungicides",
    growthTips: "Can tolerate cold temperatures and poor soil conditions.",
    video: "https://youtu.be/f1evgmI9Zro?feature=shared",
  },
];

const CerealFarming = () => {
  const [expandedCrop, setExpandedCrop] = useState(null);

  const toggleHowItWorks = (id) => {
    setExpandedCrop(expandedCrop === id ? null : id);
  };

  return (
    <div className="container">
      {cerealData.map((crop) => (
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

export default CerealFarming;
