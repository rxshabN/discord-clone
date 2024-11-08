
# Discord Clone

A full-featured real-time chat application inspired by Discord. This clone provides messaging, audio, and video chat capabilities using [LiveKit](https://livekit.io/), with user authentication handled by [Clerk](https://clerk.dev/). Built with Next.js, Prisma, and Tailwind CSS for a responsive and modern user interface.

**Live Demo**: [https://discord-clone-rishabn.up.railway.app](https://discord-clone-rishabn.up.railway.app)

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

---

## Features

- **Real-Time Messaging**: Instantly send and receive messages with auto-scroll to the latest.
- **Audio/Video Chat**: Audio and video call functionality powered by LiveKit.
- **User Authentication**: Secure, seamless authentication using Clerk.
- **Persistent Chat History**: All message data is saved to the database using Prisma ORM.
- **Responsive UI**: Built with Tailwind CSS to provide a smooth experience on both mobile and desktop.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express, LiveKit
- **Database**: Prisma ORM (supports PostgreSQL, MySQL, etc.)
- **Authentication**: Clerk
- **Real-Time**: WebSocket, Socket.IO
- **Hosting**: Railway

## Setup and Installation

### Prerequisites

- Node.js and npm installed
- PostgreSQL or another compatible database
- Clerk account for authentication
- LiveKit account for video/audio integration

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/discord-clone.git
   cd discord-clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**: Create a `.env` file in the root directory and add the following variables:
   ```plaintext
   DATABASE_URL=<your_database_url>
   LIVEKIT_API_KEY=<your_livekit_api_key>
   LIVEKIT_SECRET=<your_livekit_secret>
   CLERK_FRONTEND_API=<your_clerk_frontend_api>
   CLERK_API_KEY=<your_clerk_api_key>
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your_clerk_frontend_api>
   ```

4. **Database Setup**:
   Run Prisma migrations to create the necessary tables.
   ```bash
   npx prisma migrate dev
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **Access the app**: Open your browser and go to `http://localhost:3000` to view the app.

## Usage

1. **Login/Register**: Users must authenticate via Clerk to access chat rooms.
2. **Chat**: Enter any conversation and start messaging in real time.
3. **Video Chat**: Join a video or audio chat session within a room.
4. **Message History**: View previous messages and experience auto-scroll to the latest message.

## API Endpoints

- **GET `/api/livekit`**: Retrieves a LiveKit token for audio/video chat.
- **POST `/api/messages`**: Adds a new message to a conversation.
- **DELETE `/api/messages/:id`**: Deletes a message by ID.

---

### Additional Notes

1. **Clerk Setup**: Ensure your Clerk API keys are properly configured in `.env`.
2. **Error Handling**: Basic error handling is implemented, but improvements are welcome!
3. **Contribution**: Contributions are welcome! Please open a pull request or issue if you'd like to contribute.

---

