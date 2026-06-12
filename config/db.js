const mongoose = require('mongoose');

async function connectDB() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error('MONGO_URI lipsește din .env');
  }

  await mongoose.connect(mongoUri);
  console.log(`MongoDB conectat: ${mongoose.connection.name}`);
}

module.exports = connectDB;
