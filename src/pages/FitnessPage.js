import React, { useEffect, useState } from 'react';
import './FitnessPage.css';

const FitnessPage = () => {
  const [fitnessData, setFitnessData] = useState([]);
  const [favorites, setFavorites] = useState([]); // State to track favorite routines

  // Fetch data from db.json
  useEffect(() => {
    fetch('http://localhost:3000/fitness')  
      .then((response) => response.json())
      .then((data) => setFitnessData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to toggle favorite status
  const toggleFavorite = (botId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(botId)) {
        // Remove from favorites
        return prevFavorites.filter((id) => id !== botId);
      } else {
        // Add to favorites
        return [...prevFavorites, botId];
      }
    });
  };

  return (
    <div>
      <h1>Fitness Helpers</h1>
      <div className="fitness-list">
        {fitnessData.map((bot) => {
          const isFavorite = favorites.includes(bot.id); // Check if the bot is a favorite
          return (
            <div key={bot.id} className={`fitness-card ${isFavorite ? 'favorite' : ''}`}>
              <img src={bot.avatar_url} alt={bot.name} />
              <h2>{bot.name}</h2>
              <p><strong>Class:</strong> {bot.bot_class}</p>
              <p><strong>Health:</strong> {bot.health}</p>
              <p><strong>Damage:</strong> {bot.damage}</p>
              <p><strong>Armor:</strong> {bot.armor}</p>
              <button 
                className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
                onClick={() => toggleFavorite(bot.id)}
              >
                {isFavorite ? 'Remove from Favorites' : 'Save as Favorite'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FitnessPage;
