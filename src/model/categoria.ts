import mongoose, { Document, Model, Schema } from 'mongoose';

interface Categoria extends Document {
    nombre: string;
    imagen: string;
}

const categoriaSchema = new Schema<Categoria>({
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
});

const CategoriaModel: Model<Categoria> = mongoose.models.Categoria || mongoose.model("Categoria", categoriaSchema);
export default CategoriaModel;