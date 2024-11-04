import mongoose, { Document, Model, Schema } from 'mongoose';

interface Cliente extends Persona, Document {
    productosFavoritos: mongoose.Types.ObjectId[];
    carritoCompras: mongoose.Types.ObjectId[];
    ubicaciones: mongoose.Types.ObjectId[];
}

// Esquema del Cliente
const clienteSchema = new Schema<Cliente>({
    nombre: { type: String, required: true },
    email:  { type: String, required: true },
    password:  { type: String, required: true },
    productosFavoritos: [{ type: Schema.Types.ObjectId, ref: 'Producto' }],
    carritoCompras: [{ type: Schema.Types.ObjectId, ref: 'Producto' }],
    ubicaciones: [{ type: Schema.Types.ObjectId, ref: 'Ubicacion' }] // Define ubicaciones como un array de subdocumentos
});

const ClienteModel: Model<Cliente> = mongoose.models.Cliente || mongoose.model("Cliente", clienteSchema);
export default ClienteModel;