const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const paymentRoutes = require('./routes/payment');
const profileRoutes = require('./routes/profile');
const adminRoutes = require('./routes/admin');
const reviewRoutes = require('./routes/review');
const courseRoutes = require('./routes/course');
const { swaggerUi, specs } = require('./swagger');

dotenv.config(); // Load environment variables

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`Error connecting to MongoDB: ${err.message}`);
});

app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/courses', courseRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
