import mongoose, { Document, Model, Schema } from 'mongoose';

interface Inventario extends Document {
    producto: mongoose.Types.ObjectId;
    cantidad: number;
}

const inventarioSchema = new Schema<Inventario>({
    producto: { type: Schema.Types.ObjectId, ref: 'Producto' },
    cantidad: { type: Number, required: true }
});

const InventarioModel: Model<Inventario> = mongoose.models.Inventario || mongoose.model("Inventario", inventarioSchema);
export default InventarioModel;