import mongoose from 'mongoose';

export const connectToDatabase = async (): Promise<void> => {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
        throw new Error('A variável MONGODB_URI não foi definida.');
    }

    await mongoose.connect(mongoUri);

    console.log('Conexão com MongoDB estabelecida com sucesso!');
};
