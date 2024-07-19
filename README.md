# Online Learning System

This is an online learning system project built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Node.js](https://nodejs.org/).

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

### Installation

- First, clone the repository: git clone https://github.com/arunthakur09/online-learning-system
- cd online-learning-system

- Install dependencies for the frontend:
    - cd frontend
    npm install
    # or
    yarn install
    # or
    pnpm install
- Install dependencies for the backend:
    cd backend
    npm install
    # or
    yarn install
    # or
    pnpm install

### Running the Development Server
- Start the backend server:
    cd backend
    npx nodemon server.js
    # or
    yarn dev
    # or
    pnpm dev

- Start the frontend server:
    cd frontend
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev

- Open http://localhost:3000 with your browser to see the frontend, and the backend will be running on http://localhost:5000.

### File Structure
- The project is organized as follows:
online-learning-system/
├── backend/
│   ├── config/
│   │   └── config.js
│   ├── controllers/
│   │   └── userController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── adminMiddleware.js
│   ├── models/
│   │   ├── Course.js
│   │   ├── Review.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── course.js
│   │   ├── payment.js
│   │   ├── profile.js
│   │   └── review.js
│   ├── utils/
│   │   └── sendEmail.js
│   ├── .env
│   ├── index.js
│   ├── swagger.js
│   ├── package.json
│   └── ...
├── frontend/
│   ├── components/
│   │   ├── CourseCard.js
│   │   └── Nav.js
│   ├── contexts/
│   │   └── AuthContext.js
│   ├── pages/
│   │   ├── about.js
│   │   ├── admin.js
│   │   ├── cancel.js
│   │   ├── contact.js
│   │   ├── courses.js
│   │   ├── createcourse.js
│   │   ├── index.js
│   │   ├── login.js
│   │   ├── profile.js
│   │   ├── register.js
│   │   ├── success.js
│   │   └── _app.js
│   ├── public/
│   │   └── ...
│   ├── styles/
│   │   ├── globals.css
│   │   └── tailwind.css
│   ├── .eslintrc.json
│   ├── jsconfig.json
│   ├── next.config.js
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── package.json
└── README.md

### Environment Variables

Create a `.env` file in the root of your `backend` directory and add the following environment variables:

```env
MONGO_URI=mongodb://localhost:27017/learning_platform
PORT=5000
STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:3000
SENDGRID_API_KEY=your_sendgrid_api_key
JWT_SECRET=your_jwt_secret
