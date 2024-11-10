import mongoose, { Document, Model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

interface Cliente extends Persona, Document {
    productosFavoritos: mongoose.Types.ObjectId[];
    carritoCompras: mongoose.Types.ObjectId[];
    ubicaciones: mongoose.Types.ObjectId[];
    compararPassword(password: string): Promise<boolean>;
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


// Middleware para encriptar el password antes de guardarlo
clienteSchema.pre('save', async function (next) {
    const usuario = this as Cliente;
    if (!usuario.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(usuario.password, salt);
    next();
});

// Método para comparar passwords
clienteSchema.methods.compararPassword = function (password: string) {
    return bcrypt.compare(password, this.password);
};



const ClienteModel: Model<Cliente> = mongoose.models.Cliente || mongoose.model("Cliente", clienteSchema);
export default ClienteModel;