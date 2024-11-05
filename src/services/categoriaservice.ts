import CategoriaModel from "@/model/categoria";
import { CrearCategoriaDTO } from "@/types/dtos/categoria/crearcategoriadto";
import { ModificarCategoriaDTO } from "@/types/dtos/categoria/modificarcategoriadto";


class CategoriaService{

    static async crearCategoria(data: CrearCategoriaDTO){
        const categoria = new CategoriaModel(data);
        return await categoria.save();
    }
    
    static async modificarCategoria(id: string, data: ModificarCategoriaDTO){
        return await CategoriaModel.findByIdAndUpdate(id, {nombre: data.nombre,  imagen: data.imagen}, {new: true});
    }

    static async eliminarCategoria(idcategoria:  string){
        return await CategoriaModel.findByIdAndDelete(idcategoria);
    }

    static async obtenerCategorias(){
        return await CategoriaModel.find();
    }
        
}
export default CategoriaService;  //exportar la clase