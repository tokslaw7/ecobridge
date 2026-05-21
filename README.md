# EcoBridge

EcoBridge is a full-stack web application designed to empower individuals with special needs through music, art, storytelling, and family-centered advocacy tools. The platform provides a supportive digital space where users can explore creative activities, engage with music-based content, access storytelling features, and manage personalized dashboard experiences.

EcoBridge was built as a mission-driven application focused on accessibility, inclusion, creativity, and community support.

---

## Project Overview

EcoBridge helps bridge the gap between creative expression, learning support, and advocacy for individuals with special needs and their families.

The application includes:

- A public landing page introducing the EcoBridge mission
- About and contact pages
- User registration and login flow
- Personalized dashboard experience
- Music content management
- Activity content management
- Storytelling section
- Backend API for users, login, music, and activities
- Prisma ORM integration with a SQLite database

---

## Mission

EcoBridge’s mission is to empower individuals with special needs through music, art, and storytelling tools while also serving as an advocacy hub for families.

---

## Demo and Design Resources

### Video Walkthrough

[EcoBridge Video Walkthrough](https://drive.google.com/file/d/1KSR186VRWydKKAR5ECHWYqNf_-Afv0_t/view?usp=sharing)

### Figma Mockups

[EcoBridge Lo-Fi / Hi-Fi Mockups](https://www.figma.com/design/QFbmcylRYATDhMYczaIaN0/EcoBridge-Team--Lo-Fi---Hi-Fi-Mockups-?node-id=4-10&t=asxRCuslUQ6Cw3MW-1)

---

## Team Members
- Tokunbo Lawal
- Athena Jacob
- Dominique Bullard
- Mya Walker

---

## Tech Stack

### Frontend

- React , Vite , JavaScript, Bootstrap, React Bootstrap, Bootstrap Icons, Tailwind CSS, React Router DOM, Redux Toolkit
- React Redux, TanStack React Query, Axios, Socket.IO Client, Lucide React, React Icons

### Backend
- Node.js
- Express.js
- Prisma ORM
- SQLite
- CORS

### Development Tools
- ESLint
- Vite
- Prisma CLI
- Faker.js for seed data
- Docker / Docker Compose support
- NGINX configuration for production-style frontend serving

---
## Repository Structure

```bash
ecobridge/
├── backend-prisma/
│   ├── generated/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   ├── seed.js
│   │   └── user.sqlite
│   ├── routes/
│   │   ├── activity.js
│   │   ├── login.js
│   │   ├── music.js
│   │   ├── signup.js
│   │   └── user.js
│   ├── package.json
│   ├── package-lock.json
│   ├── readme.md
│   └── server.js
│
├── ecobridge/
│   ├── docker/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── component/
│   │   │   ├── about/
│   │   │   ├── activity/
│   │   │   ├── apicalls/
│   │   │   ├── auth/
│   │   │   ├── authorization/
│   │   │   ├── contacts/
│   │   │   ├── context/
│   │   │   ├── dashHome/
│   │   │   ├── landingpage/
│   │   │   ├── layout/
│   │   │   ├── loaders/
│   │   │   ├── login/
│   │   │   ├── logout/
│   │   │   ├── music/
│   │   │   ├── signup/
│   │   │   └── storytelling/
│   │   ├── css/
│   │   ├── links/
│   │   ├── services/
│   │   ├── store/
│   │   ├── utils/
│   │   ├── views/
│   │   ├── App.jsx
│   │   ├── AppRouters.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── docker-compose.yml
│   ├── nginx.conf
│   └── run.sh
│
└── README.md






# EcoBridge
EcoBridge’s mission: empowering individuals with special needs through music, art, and storytelling tools, while also serving as an advocacy hub for families.
### Video Walkthrough: [https://drive.google.com/file/d/1KSR186VRWydKKAR5ECHWYqNf_-Afv0_t/view?usp=sharing](https://drive.google.com/file/d/1KSR186VRWydKKAR5ECHWYqNf_-Afv0_t/view?usp=sharing)
### Figma mockups: https://www.figma.com/design/QFbmcylRYATDhMYczaIaN0/EcoBridge-Team--Lo-Fi---Hi-Fi-Mockups-?node-id=4-10&t=asxRCuslUQ6Cw3MW-1
### Team Members: Athena Jacob, Dominique Bullard, Tokunbo Lawal, Mya Walker
# Frontend README (`ecobridge/`)
The EcoBridge frontend is a React application built with Vite and styled using Bootstrap. It provides the user interface for EcoBridge’s mission. Users can also login to view their personalized dashboard.
---
#### 1. Navigate into the frontend folder (cd ecobridge)
#### 2. Install dependencies (npm i)
#### 3. Npm run dev
# Backend README (`backend-prisma/README.md`)
This is the Node.js + Express backend for the EcoBridge platform. It uses Prisma as the ORM and a SQLite database. The backend provides API endpoints for managing creative content, including music, user data, and authentication.
---
#### 1. Navigate into the backend folder (cd backend-prisma)
#### 2. Install dependencies (npm install)
#### 3.  Generate prisma (npx prisma generate)
#### 4. node server.js
