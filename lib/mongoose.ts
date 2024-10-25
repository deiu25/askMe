import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDetabase = async () => {
    mongoose.set('strictQuery', true);

    if (!process.env.MONGODB_URL) {
        return console.timeLog('MISSING MONGODB URL');
    }

    if (isConnected) {
        console.log('Database is already connected');
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'ask-me'
        })
        isConnected = true;
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('MongoDB connection failed', error)
    }
}