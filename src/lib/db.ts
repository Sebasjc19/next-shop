import mongoose from 'mongoose';

//const MONGODB_URI = process.env.MONGODB_URI ||'mongodb+srv://sebastianjaramilloc:hola123@next-js.a3xlv.mongodb.net/?retryWrites=true&w=majority&appName=Next-js';
//const MONGODB_URI = process.env.MONGODB_URI ||'mongodb+srv://camilocortesd:12345@next-js.a3xlv.mongodb.net/?retryWrites=true&w=majority&appName=Next-js';

// para la base que tengo xd
const MONGODB_URI = process.env.MONGODB_URI ||'mongodb+srv://juanccortesd:salem1234@next-shop.7cxs0.mongodb.net/?retryWrites=true&w=majority&appName=next-shop';

if (!MONGODB_URI) {
  throw new Error('Por favor define la variable de entorno MONGODB_URI');
}

async function connect() {
  if (mongoose.connection.readyState === 1) {
    return; // si ya está conectado a la base de datos
  }

  return mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 60000, // Tiempo de espera para selección del servidor en ms (20 segundos)
  });
}

export default connect;
