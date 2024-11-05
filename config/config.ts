import dotenv from 'dotenv';

// Carga las variables de entorno del archivo .env
dotenv.config();

export const config = {
    JWT_SECRET: process.env.JWT_SECRET,
    DB_URI: process.env.DB_URI
};
