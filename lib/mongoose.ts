import mongoose from 'mongoose'

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (!process.env.MONGODB_URL) return console.error('Mongo URI not found');
    if (isConnected) return console.log('Already connected to DB');

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;

        console.log('Connected to DB');
    } catch (error) {
        console.error('Error connecting to DB', error);
    }
}