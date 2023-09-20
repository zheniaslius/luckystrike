import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://sluisarchuk:ieswNq6IIkfDmBWA@cluster0.siloukp.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});