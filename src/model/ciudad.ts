import mongoose, { Document, Model, Schema } from 'mongoose';

interface Ciudad extends Document {
    _id: string;
    nombre: string;
    departamento: mongoose.Types.ObjectId;
}

const CiudadSchema = new Schema<Ciudad>({
    nombre: { type: String, required: true },
    departamento: { type: Schema.Types.ObjectId, ref: 'Departamento', required: true }
});

const CiudadModel: Model<Ciudad> = mongoose.models.Ciudad || mongoose.model("Ciudad", CiudadSchema);
export default CiudadModel;