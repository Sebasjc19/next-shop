import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI ||'mongodb+srv://sebastianjaramilloc:hola123@next-js.a3xlv.mongodb.net/?retryWrites=true&w=majority&appName=Next-js';

if (!MONGODB_URI) {
  throw new Error('Por favor define la variable de entorno MONGODB_URI');
}

async function connect() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  return mongoose.connect(MONGODB_URI);
}

export default connect;
