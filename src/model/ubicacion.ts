import mongoose, { Document, Model, Schema } from 'mongoose';


interface Ubicacion {
    _id: string;
    direccion: string;
    ciudad: mongoose.Types.ObjectId; //Id de la ciudad
}

const ubicacionSchema = new Schema<Ubicacion>({
    direccion: { type: String, required: true },
    ciudad: { type: Schema.Types.ObjectId, ref: 'Ciudad', required: true } // Referencia a Ciudad
});

const UbicacionModel: Model<Ubicacion> = mongoose.models.Ubicacion || mongoose.model("Ubicacion", ubicacionSchema);
export default UbicacionModel;