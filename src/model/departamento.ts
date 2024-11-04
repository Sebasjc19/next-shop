import mongoose, { Document, Model, Schema } from 'mongoose';

interface Departamento extends Document {
    _id: string;
    nombre: string;
}

const DepartamentoSchema = new Schema<Departamento>({
    nombre: { type: String, required: true }
});

const DepartamentoModel: Model<Departamento> = mongoose.models.Departamento || mongoose.model("Departamento", DepartamentoSchema);
export default DepartamentoModel;