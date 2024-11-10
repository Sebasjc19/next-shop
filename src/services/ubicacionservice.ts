import UbicacionModel from "@/model/ubicacion";
import { CrearUbicacionDTO } from "@/types/dtos/ubicacion/crearubicaciondto";
import { ModificarUbicacionDTO } from "@/types/dtos/ubicacion/modificarubicaciondto";


class UbicacionService{

    static async crearUbicacion(data: CrearUbicacionDTO){
        const categoria = new UbicacionModel(data);
        return await categoria.save();
    }

    static async modificarUbicacion(id: string, data: ModificarUbicacionDTO){
        return await UbicacionModel.findByIdAndUpdate(id, {direccion: data.direccion,  ciudad: data.ciudad}, {new: true});
    }

    static async eliminarUbicacion(idcategoria:  string){
        return await UbicacionModel.findByIdAndDelete(idcategoria);
    }

    static async obtenerUbicacion(id: string){
        const ubicacion  = await UbicacionModel.findById(id);
        if (!ubicacion){
            throw new Error('No se encontró la ubicación');
        }
        return await ubicacion;
    }
   
}
export default UbicacionService;  //exportar la clase