import DepartamentoModel from "@/model/departamento";


class DepartamentoService{

    static async crearDepartamento(nombre: string){
        const regex = new RegExp(nombre, "i");
        const departamento = await DepartamentoModel.find({nombre: regex})
        if(!departamento){
            const nuevoDepartamento = new DepartamentoModel({nombre: nombre})
            return  await nuevoDepartamento.save();
        } 
        throw new  Error("Departamento ya existe");
        
    }
    
    static async obtenerDepartamento(id: string){
        const departamento =  DepartamentoModel.findById(id);
        if(!departamento){
            throw new Error("Departamento no encontrado");
        }
        return departamento;
    }

    static async obtenerDepartamentos(){
        return await DepartamentoModel.find();
    }
      
}
export default DepartamentoService;  //exportar la clase