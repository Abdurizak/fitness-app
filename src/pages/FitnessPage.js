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

  useEffect(() => {
    fetch('https://fitness-app-vdmr.onrender.com/fitness')
      .then((response) => response.json())
      .then((data) => setFitnessData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const toggleFavorite = (botId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(botId)) {
        return prevFavorites.filter((id) => id !== botId);
      } else {
        return [...prevFavorites, botId];
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBot((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const addNewBot = (e) => {
    e.preventDefault();

    if (newBot.health < 0 || newBot.health > 100) {
      alert("Health must be between 0 and 100.");
      return;
    }
    if (newBot.damage < 0 || newBot.damage > 10) {
      alert("Damage must be between 0 and 10.");
      return;
    }
    if (newBot.armor < 0 || newBot.armor > 5) {
      alert("Armor must be between 0 and 5.");
      return;
    }

    const newFitnessRoutine = {
      ...newBot,
      id: Date.now(),
    };

    setFitnessData((prevData) => [...prevData, newFitnessRoutine]);

    setNewBot({
      name: '',
      bot_class: '',
      health: '',
      damage: '',
      armor: '',
      avatar_url: ''
    });
  };

  const handleEdit = (bot) => {
    setEditingBot(bot); 
    setNewBot({
      name: bot.name,
      bot_class: bot.bot_class,
      health: bot.health,
      damage: bot.damage,
      armor: bot.armor,
      avatar_url: bot.avatar_url
    });
  };

  const saveEditedBot = (e) => {
    e.preventDefault();

    if (newBot.health < 0 || newBot.health > 100) {
      alert("Health must be between 0 and 100.");
      return;
    }
    if (newBot.damage < 0 || newBot.damage > 10) {
      alert("Damage must be between 0 and 10.");
      return;
    }
    if (newBot.armor < 0 || newBot.armor > 5) {
      alert("Armor must be between 0 and 5.");
      return;
    }

    setFitnessData((prevData) =>
      prevData.map((bot) =>
        bot.id === editingBot.id ? { ...bot, ...newBot } : bot
      )
    );

    setNewBot({
      name: '',
      bot_class: '',
      health: '',
      damage: '',
      armor: '',
      avatar_url: ''
    });
    setEditingBot(null);
  };

  const deleteFitnessRoutine = (botId) => {
    const confirmed = window.confirm("Are you sure you want to delete this fitness routine?");
    if (confirmed) {
      setFitnessData((prevData) => prevData.filter((bot) => bot.id !== botId));
    }
  };

  return (
    <div>
      <h1>Fitness Bots <span className="favorite-count">Favorites: {favorites.length}</span></h1>

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
        <select
          name="bot_class"
          value={newBot.bot_class}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Class</option>
          <option value="Strength">Strength</option>
          <option value="Cardio">Cardio</option>
          <option value="Flexibility/Mobility">Flexibility/Mobility</option>
          <option value="Endurance">Endurance</option>
          <option value="Balance/Recovery">Balance/Recovery</option>
          <option value="Mind-Body">Mind-Body</option>
        </select>
        <input
          type="number"
          name="health"
          placeholder="Health"
          value={newBot.health}
          onChange={handleInputChange}
          min="0"
          max="100"
          required
        />
        <input
          type="number"
          name="damage"
          placeholder="Damage"
          value={newBot.damage}
          onChange={handleInputChange}
          min="0"
          max="10"
          required
        />
        <input
          type="number"
          name="armor"
          placeholder="Armor"
          value={newBot.armor}
          onChange={handleInputChange}
          min="0"
          max="5"
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
        {editingBot && <button type="button" onClick={() => setEditingBot(null)}>Cancel Edit</button>}
      </form>

      <div className="fitness-list">
        {fitnessData.length === 0 ? (
          <p>No fitness routines available. Add a new one!</p>
        ) : (
          fitnessData.map((bot) => {
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
          })
        )}
      </div>
    </div>
  );
};

export default FitnessPage;
