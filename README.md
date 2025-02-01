# Management Contact and user API with Node.js

## Description
This is a Node.js project for managing users and contacts with a database connection.

## Features
- User authentication and authorization
- CRUD operations for contacts
- Secure database connection

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (latest LTS version recommended)
- [MongoDB](https://www.mongodb.com/) (or a MongoDB Atlas connection)

## Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   ```
2. **Navigate to the project folder:**
   ```sh
   cd <project-folder>
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```

## Configuration

Create a `.env` file in the root directory and set the required environment variables:
```env
PORT=<server-port>
USERNAME=<your-database-username>
PASSWORD=<your-database-password>
CONNECTION_STRING=<your-connection-string>
ACCESS_TOKEN_SECRET=<your-access-token>
```

## Usage

Start the development server:
```sh
npm run dev
```
To run in production mode:
```sh
npm start
```

## Project Structure
```
project-folder/
│-- config/
│   ├── dbConnection.js  # Database connection setup
│-- controllers/
│   ├── contactController.js  # Handles contact-related API requests
│   ├── userController.js  # Handles user-related API requests
│-- models/
│   ├── contactModel.js  # Contact schema definition
│   ├── userModel.js  # User schema definition
│-- routes/
│   ├── contactRoutes.js  # Contact API routes
│   ├── userRoutes.js  # User API routes
│-- middleware/
│   ├── authMiddleware.js  # Authentication middleware
│-- server.js  # Entry point of the application
│-- package.json  # Project metadata and dependencies
│-- .env  # Environment variables (not included in repo)
│-- .gitignore  # Files and directories to ignore in Git
```

## API Endpoints
### User Routes
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile (protected)

### Contact Routes
- `GET /api/contacts` - Get all contacts
- `POST /api/contacts` - Create a new contact
- `GET /api/contacts/:id` - Get a contact by ID
- `PUT /api/contacts/:id` - Update a contact by ID
- `DELETE /api/contacts/:id` - Delete a contact by ID

## License
This project is licensed under the MIT License.
