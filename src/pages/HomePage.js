import React, { useState, useEffect } from 'react';

const HomePage = () => {
  
  const [routineName, setRoutineName] = useState('');
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [difficulty, setDifficulty] = useState('');
  
  // State to store the list of saved routines
  const [routines, setRoutines] = useState([]);

  // Load saved routines from localStorage when the component mounts
  useEffect(() => {
    const savedRoutines = JSON.parse(localStorage.getItem('routines')) || [];
    setRoutines(savedRoutines);
  }, []);

  // Handle form submission to add a new routine
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new routine object
    const newRoutine = {
      routineName,
      exercises: exercise,
      duration,
      difficulty,
    };

    // Add the new routine to the list of routines
    const updatedRoutines = [...routines, newRoutine];
    setRoutines(updatedRoutines);

    // Save the updated list of routines to localStorage
    localStorage.setItem('routines', JSON.stringify(updatedRoutines));

    // Clear the form fields
    setRoutineName('');
    setExercise('');
    setDuration('');
    setDifficulty('');
  };

  // Handle the deletion of a routine
  const handleDelete = (index) => {
    // Remove the routine at the specified index
    const updatedRoutines = routines.filter((_, i) => i !== index);
    setRoutines(updatedRoutines);

    // Update localStorage to remove the deleted routine
    localStorage.setItem('routines', JSON.stringify(updatedRoutines));
  };

  return (
    <div 
      style={{
        backgroundImage: 'url(/images/background.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed', 
        height: '100vh', 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center'
      }}
    >
      <div className="content">
        <h1>FITFORMULA - Fitness Routines</h1>
        <p>Manage your fitness routines below,</p>

        {/* Form for adding a new routine */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="routineName" className="form-label">Routine Name</label>
            <input 
              type="text" 
              id="routineName" 
              className="form-control" 
              value={routineName} 
              onChange={(e) => setRoutineName(e.target.value)} 
              required 
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exercise" className="form-label">Exercises</label>
            <input 
              type="text" 
              id="exercise" 
              className="form-control" 
              value={exercise} 
              onChange={(e) => setExercise(e.target.value)} 
              required 
            />
          </div>

          <div className="mb-3">
            <label htmlFor="duration" className="form-label">Duration (minutes)</label>
            <input 
              type="number" 
              id="duration" 
              className="form-control" 
              value={duration} 
              onChange={(e) => setDuration(e.target.value)} 
              required 
            />
          </div>

          <div className="mb-3">
            <label htmlFor="difficulty" className="form-label">Difficulty Level</label>
            <select 
              id="difficulty" 
              className="form-control" 
              value={difficulty} 
              onChange={(e) => setDifficulty(e.target.value)} 
              required
            >
              <option value="">Select Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">Add Routine</button>
        </form>

        {/* Display the list of saved routines */}
        <div className="mt-4">
          <h3>Saved Routines</h3>
          {routines.length === 0 ? (
            <p>No routines saved yet. Add your first routine!</p>
          ) : (
            <ul className="list-group">
              {routines.map((routine, index) => (
                <li key={index} className="list-group-item">
                  <h5>{routine.routineName}</h5>
                  <p><strong>Exercises:</strong> {routine.exercises}</p>
                  <p><strong>Duration:</strong> {routine.duration} minutes</p>
                  <p><strong>Difficulty:</strong> {routine.difficulty}</p>
                  {/* Delete button */}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
