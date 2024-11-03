import mongoose, { Document, Model, Schema } from 'mongoose';

//Subdocumento de cliente, una ubicacion
interface Detalle {
    producto: mongoose.Types.ObjectId;
    cantidad: number;
    precio: number;
}


interface Factura extends Document {
    cliente: mongoose.Types.ObjectId;
    detalles: Detalle[];
}


const detalleSchema = new Schema<Detalle>({
    producto: { type: Schema.Types.ObjectId, ref: 'Producto' },
    cantidad: { type: Number, required: true },
    precio: { type: Number , required: true } 
});

// Esquema del Cliente
const facturaSchema = new Schema<Factura>({
    cliente: {type: Schema.Types.ObjectId, ref: 'Cliente'},
    detalles: [detalleSchema]
});

const FacturaModel: Model<Factura> = mongoose.models.Factura || mongoose.model("Factura", facturaSchema);
export default FacturaModel;