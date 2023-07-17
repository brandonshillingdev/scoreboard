# Scorekeeper App

The Scorekeeper App is a web application built with React, Tailwind CSS, and Firebase. It allows users to keep track of scores for multiple players or teams in a fun and interactive way. This app is ideal for games, sports events, or any activity that requires score tracking for multiple participants.

## Features

- Add and remove players/teams dynamically.
- Update individual scores for each player/team.
- Real-time score updates with Firebase Firestore.
- Clear all scores with a single button click.
- Intuitive user interface with responsive design.

## Installation and Setup

1. Clone this repository to your local machine using:
git clone https://github.com/brandonshillingdev/scorekeeper-app.git

2. Navigate into the project directory:
cd scorekeeper-app


3. Install the required dependencies:
npm install

4. Create a Firebase project and obtain the configuration object (Firebase Web App Config).

5. Create a `.env` file in the root directory and add the Firebase configuration:
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id

6. Start the development server:
npm start


7. Open your web browser and go to `http://localhost:3000` to view the app.

## Usage

- To add a new player/team, enter the name in the input field and click "Add Player."
- To update a player/team's score, use the "+" and "-" buttons beside their name.
- To clear all scores, click the "Clear Score" button.
- The app automatically updates in real-time when any score is changed.

## Technologies Used

- React: Frontend JavaScript library for building user interfaces.
- Tailwind CSS: Utility-first CSS framework for fast and responsive UI design.
- Firebase: Real-time database for handling data synchronization.

## Contributing

Contributions to the Scorekeeper App are welcome! If you find any issues or want to enhance the app with new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact

You can find more of my projects on [GitHub](https://github.com/brandonshillingdev/). If you have any questions or suggestions, feel free to reach out to me at brandon.shilling.dev@gmail.com.

![Brandon Shilling](https://avatars.githubusercontent.com/brandonshillingdev)

