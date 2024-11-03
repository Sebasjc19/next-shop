import mongoose, { Document, Model, Schema } from 'mongoose';

interface Producto extends Document {
    nombre: string;
    cantidad: number;
    categoria: mongoose.Types.ObjectId;
    precio: number;
    descripcion: string;
}

const productoSchema = new Schema<Producto>({
    nombre: { type: String, required: true },
    cantidad: { type: Number, required: true },
    categoria: { type: Schema.Types.ObjectId, ref: 'Categoria' },
    precio:  { type: Number, required: true },
    descripcion:  { type: String, required: true }
});

const ProductoModel: Model<Producto> = mongoose.models.Producto || mongoose.model("Producto", productoSchema);
export default ProductoModel;