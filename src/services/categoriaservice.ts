import CategoriaModel from "@/model/categoria";
import { categoria} from "@/types/categoria"
import { CategoriaDTO } from "@/types/dtos/categoria/categoriadto";
import { CrearCategoriaDTO } from "@/types/dtos/categoria/crearcategoriadto";


class CategoriaService{

    static async crearCategoria(data: CrearCategoriaDTO){
        const categoria = new CategoriaModel(data);
        return await categoria.save();
    }

    static async modificarCategoria(idcategoria:  string, nombre: string){
        return await CategoriaModel.findByIdAndUpdate(idcategoria, {nombre: nombre}, {new: true});
    }

    static async eliminarCategoria(idcategoria:  string, nombre: string){
        return await CategoriaModel.findByIdAndDelete(idcategoria);
    }

    static async obtenerCategorias(){
        return await CategoriaModel.find();
    }
        
}
export default CategoriaService;  //exportar la clase