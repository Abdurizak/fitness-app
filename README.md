## Fitness App
A fitness app built with React, allowing users to manage a collection of fitness routines for "fitness bots." Users can add, update, delete, and favorite routines. The app fetches and stores data from a local JSON server (via db.json), making it a simple and lightweight fitness management solution.

## Features
View Fitness Routines: See a list of all available fitness routines.
Add New Fitness Routine: Add new fitness routines with attributes like name, class, health, damage, armor, and avatar URL.
Edit Fitness Routine: Edit an existing fitness routine by updating its details.
Delete Fitness Routine: Remove any fitness routine from the list.
Favorite Fitness Routines: Mark and unmark fitness routines as favorites for quick access.

## Technologies Used
React: The main library for building the app's user interface.
React Hooks (useState, useEffect): For managing the app state and side effects.
JSON Server: A mock backend server used to serve data locally via db.json.
CSS: For styling the app.

## Getting Started
Prerequisites
Node.js (preferably the latest LTS version)
npm (Node Package Manager) or yarn
Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/Abdurizak/fitness-app.git
cd fitness-app
Install dependencies:

bash
Copy code
npm install
Install and run json-server for mock backend:

In the root of the project, create a db.json file (if not already created) to mock the API data.
Example db.json:

json
Copy code
{
  "fitness": [
    {
      "id": 1,
      "name": "PowerBot",
      "bot_class": "Warrior",
      "health": 150,
      "damage": 50,
      "armor": 30,
      "avatar_url": "https://example.com/avatar1.png"
    },
    {
      "id": 2,
      "name": "SpeedBot",
      "bot_class": "Assassin",
      "health": 100,
      "damage": 75,
      "armor": 10,
      "avatar_url": "https://example.com/avatar2.png"
    }
  ]
}
Run the json-server:

bash
Copy code
npx json-server --watch db.json --port 3000
This will start a mock API server at http://localhost:3000, serving the fitness data stored in db.json.

Run the React development server:

bash
Copy code
npm start
This will start the React app on http://localhost:3001.


## Usage
View Fitness Routines: After starting the app, you can see a list of fitness routines fetched from http://localhost:3000/fitness.
Add New Routine: Fill out the form on the top to add a new fitness routine.
Edit Routine: Click on the "Edit" button next to any routine to modify it. The form will pre-fill with the routine's current data.
Delete Routine: Click on the "Delete" button next to any routine to remove it.
Favorite Routine: Click on the "Save as Favorite" button to mark a routine as a favorite. It will show up with a special style indicating it is a favorite.


## Contributing
We welcome contributions to this project! To contribute:

## Fork the repository.
Clone your forked repository to your local machine.
Create a new branch for your changes.
Make your changes.
Commit and push your changes.
Open a pull request with a clear description of your changes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

