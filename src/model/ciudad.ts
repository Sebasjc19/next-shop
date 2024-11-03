import mongoose, { Document, Model, Schema } from 'mongoose';

interface Ciudad extends Document {
    nombre: string;
}

const ciudadSchema = new Schema<Ciudad>({
    nombre: { type: String, required: true }
});

const CiudadModel: Model<Ciudad> = mongoose.models.Ciudad || mongoose.model("Ciudad", ciudadSchema);
export default CiudadModel;