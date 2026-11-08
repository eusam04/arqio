import 'dotenv/config';

import app from './app.js';
import { connectToDatabase } from './config/database.js';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectToDatabase();

        app.listen(PORT, () => {
            console.log(`Arqio API rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error);
        process.exit(1);
    }
};

startServer();
