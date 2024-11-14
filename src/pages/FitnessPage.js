import React, { useEffect, useState } from 'react';
import './FitnessPage.css';

const FitnessPage = () => {
  const [fitnessData, setFitnessData] = useState([]);
  const [favorites, setFavorites] = useState([]); 
  const [newBot, setNewBot] = useState({
    name: '',
    bot_class: '',
    health: '',
    damage: '',
    armor: '',
    avatar_url: ''
  });
  const [editingBot, setEditingBot] = useState(null); 

  // Fetch data from db.json
  useEffect(() => {
    fetch('https://fitness-app-vdmr.onrender.com/fitness')
      .then((response) => response.json())
      .then((data) => setFitnessData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  //Favorite status
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

  // Handle input changes for new or editing bot
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBot((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Adding a new fitness routine
  const addNewBot = (e) => {
    e.preventDefault();

    const newFitnessRoutine = {
      ...newBot,
      id: Date.now(), 
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

  //Editing a fitness routine
  const handleEdit = (bot) => {
    setEditingBot(bot); // Set the bot to be edited
    setNewBot({
      name: bot.name,
      bot_class: bot.bot_class,
      health: bot.health,
      damage: bot.damage,
      armor: bot.armor,
      avatar_url: bot.avatar_url
    });
  };

  //Saving the edited fitness routine
  const saveEditedBot = (e) => {
    e.preventDefault();
    setFitnessData((prevData) =>
      prevData.map((bot) =>
        bot.id === editingBot.id ? { ...bot, ...newBot } : bot
      )
    );

    // Clear form after saving
    setNewBot({
      name: '',
      bot_class: '',
      health: '',
      damage: '',
      armor: '',
      avatar_url: ''
    });
    setEditingBot(null); // Reset editing state
  };

  // Deleting a fitness routine
  const deleteFitnessRoutine = (botId) => {
    setFitnessData((prevData) => prevData.filter((bot) => bot.id !== botId));
  };

  return (
    <div>
      <h1>Fitness Bots</h1>

      {/* Form to add or edit a fitness routine */}
      <form onSubmit={editingBot ? saveEditedBot : addNewBot} className="add-bot-form">
        <h2>{editingBot ? 'Edit Fitness Routine' : 'Add New Fitness Routine'}</h2>
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
        <button type="submit">{editingBot ? 'Save Changes' : 'Add Fitness Routine'}</button>
      </form>

      <div className="fitness-list">
        {fitnessData.map((bot) => {
          const isFavorite = favorites.includes(bot.id); 
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
                className="edit-btn"
                onClick={() => handleEdit(bot)}
              >
                Edit
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
