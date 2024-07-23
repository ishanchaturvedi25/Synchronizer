# Syncronus-Chat-App

Syncronus-Chat-App is a full-stack real-time chat application built to enable seamless communication. This project leverages modern web technologies and provides a robust platform for messaging with real-time features, secure authentication, and efficient state management.

## Project Link

The project is deployed and can be accessed [here](https://syncronus-chat-app.vercel.app/).

## Features

- **Real-Time Messaging**: Instant communication using Socket.IO for real-time updates.
- **Secure Authentication**: User authentication using JWT and bcrypt for secure login and data protection.
- **RESTful APIs**: Efficiently handles user management, messaging, and file uploads with Express.
- **State Management**: Utilizes Zustand for effective state management in React.
- **Responsive Design**: Built with TailwindCSS to ensure the application is fully responsive across all devices.

## Technologies Used

### Frontend

- **React**: Library for building user interfaces.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **Socket.IO Client**: For real-time communication.
- **Zustand**: For state management.
- **Axios**: For making HTTP requests.
- **Radix UI**: For accessible UI components.
- **Vite**: For fast development and build processes.

### Backend

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM for MongoDB.
- **JWT**: For secure authentication.
- **Bcrypt**: For password hashing.
- **Socket.IO**: For real-time communication.
- **Multer**: For handling file uploads.
- **Nodemon**: For automatic server restarts during development.

## Installation and Setup

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm installed on your local machine.
- MongoDB instance running.

### Clone the Repository

```bash
git clone https://github.com/ishanchaturvedi25/Syncronus-Chat-App.git
cd Syncronus-Chat-App
```

### Setup Backend

- Navigate to the server directory:

```bash
cd server
```

- Install dependencies:

```bash
npm install
```

- Create a .env file and add your MongoDB URI and JWT secret:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

- Start the server:

```bash
npm run dev
```

### Setup Frontend

- Navigate to the client directory:

```bash
cd client
```

- Install dependencies:

```bash
npm install
```

- Start the development server:

```bash
npm run dev
```

## Usage

- Visit http://localhost:5173 to access the application locally. You can create an account, log in, and start chatting in real-time.