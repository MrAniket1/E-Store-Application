# E-Store Application (MERN Stack)
Welcome to the E-Store Application! This is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to browse and purchase various products online.

## Features

- Browse a wide range of products
- Add products to the shopping cart
- Proceed to checkout and place orders
- User authentication and registration
- Admin dashboard to manage products and orders

## Technologies Used

- **Frontend:**
  - React.js
  - React Router for navigation
  - Redux for state management
  - Bootstrap for styling
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB for database

## Installation

1. Clone the repository:
  git clone <repository-url>

2. Navigate to the backend folder and install backend dependencies:
  cd backend
  npm install

3. Navigate to the frontend folder and install frontend dependencies:
  cd frontend
  npm install

4. Configuration
  Create a .env file in the backend folder and set up environment variables:

  NODE_ENV=<development_or_production>
  PORT=5000
  MONGO_URI=<Your_mongodb_url>
  API_URL=http://localhost:5000/API_URL
  JWT_SECRET=<your_secret_key>
  PAYMENT_CLIENT_ID=<your_paypal_client_id>

5. Set up your MongoDB database and obtain a connection string.

6. Run the following command from the root directory of the project to import sample data in your database

  npm run data:import

  without running this command once you will not able to open the application.

7. Start the server by running the following command from the root directory of the project:

## For development environment
  - Start the backend server:
    cd backend
    npm start

  - Start the frontend development server:
    cd frontend
    npm start
  
  - Access the application in your browser at http://localhost:PORT.

## Deployment
  To deploy the application to a production environment, follow the deployment process for both the backend and frontend:

  Backend: Deploy the Express.js server to a hosting provider (e.g., Heroku, AWS, etc.).
  Frontend: Build the React app and deploy the static files to a hosting provider (e.g., Netlify, Vercel, GitHub Pages, etc.).

## Contributing
  Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.

## License
  - This project is licensed under the MIT License - see the LICENSE file for details.
