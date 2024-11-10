import mongoose, { Document, Model, Schema } from 'mongoose';

//No tiene nada dentro porque no tiene mas atributos
interface Administrador extends Persona, Document {}


// Esquema del administrador
const administradorSchema = new Schema<Administrador>({
    nombre: { type: String, required: true },
    email:  { type: String, required: true },
    password:  { type: String, required: true },
});

const AdministradorModel: Model<Administrador> = mongoose.models.Administrador || mongoose.model("Administrador", administradorSchema);
export default AdministradorModel;