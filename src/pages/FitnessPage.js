import React, { useEffect, useState } from 'react';
import './FitnessPage.css';

const FitnessPage = () => {
  const [fitnessData, setFitnessData] = useState([]);
  const [favorites, setFavorites] = useState([]); // State to track favorite routines
  const [newBot, setNewBot] = useState({
    name: '',
    bot_class: '',
    health: '',
    damage: '',
    armor: '',
    avatar_url: ''
  });

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

  // Handle input changes for new bot
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBot((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Function to handle adding a new fitness routine
  const addNewBot = (e) => {
    e.preventDefault();

    const newFitnessRoutine = {
      ...newBot,
      id: Date.now(), // Generate a unique ID based on timestamp
    };

    setFitnessData((prevData) => [...prevData, newFitnessRoutine]);

    // Clear form after adding
    setNewBot({
      name: '',
      bot_class: '',
      health: '',
      damage: '',
      armor: '',
      avatar_url: ''
    });
  };

  // Function to handle deleting a fitness routine
  const deleteFitnessRoutine = (botId) => {
    setFitnessData((prevData) => prevData.filter((bot) => bot.id !== botId));
  };

  return (
    <div>
      <h1>Fitness Bots</h1>

      {/* Form to add a new fitness routine */}
      <form onSubmit={addNewBot} className="add-bot-form">
        <h2>Add New Fitness Routine</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newBot.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="bot_class"
          placeholder="Class"
          value={newBot.bot_class}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="health"
          placeholder="Health"
          value={newBot.health}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="damage"
          placeholder="Damage"
          value={newBot.damage}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="armor"
          placeholder="Armor"
          value={newBot.armor}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="avatar_url"
          placeholder="Avatar URL"
          value={newBot.avatar_url}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Fitness Routine</button>
      </form>

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
              <button 
                className="delete-btn" 
                onClick={() => deleteFitnessRoutine(bot.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FitnessPage;
