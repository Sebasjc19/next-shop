import CiudadModel from "@/model/ciudad";
import { CrearCiudadDTO } from "@/types/dtos/ciudad/crearciudaddto";


class CiudadService{

    static async crearCiudad(data: CrearCiudadDTO){
        const regex = new RegExp(data.nombre, "i");
        const ciudad = await CiudadModel.findOne({nombre: regex, departamento: data.departamento})
        if(ciudad == null){
            const ciudad = new CiudadModel(data)
            return  await ciudad.save();
        } 
        throw new  Error("Ciudad ya existe");
    }
    
    static async obtenerCiudad(id: string){
        const departamento =  await CiudadModel.findById(id);
        if(!departamento){
            throw new Error("Departamento no encontrado");
        }
        return departamento;
    }

    static async obtenerCiudades(){
        return await CiudadModel.find();
    }
      
}
export default CiudadService;  //exportar la clase