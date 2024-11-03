import mongoose, { Document, Model, Schema } from 'mongoose';

//Subdocumento de cliente, una ubicacion
interface Ubicacion {
    direccion: string;
    ciudad: mongoose.Types.ObjectId; //Id de la ciudad
}


interface Cliente extends Persona, Document {
    productosFavoritos: mongoose.Types.ObjectId[];
    ubicaciones: Ubicacion[];
}


const ubicacionSchema = new Schema<Ubicacion>({
    direccion: { type: String, required: true },
    ciudad: { type: Schema.Types.ObjectId, ref: 'Ciudad', required: true } // Referencia a Ciudad
});

// Esquema del Cliente
const clienteSchema = new Schema<Cliente>({
    nombre: { type: String, required: true },
    email:  { type: String, required: true },
    password:  { type: String, required: true },
    productosFavoritos: [{ type: Schema.Types.ObjectId, ref: 'Producto' }],
    ubicaciones: [ubicacionSchema] // Define ubicaciones como un array de subdocumentos
});

const ClienteModel: Model<Cliente> = mongoose.models.Cliente || mongoose.model("Cliente", clienteSchema);
export default ClienteModel;