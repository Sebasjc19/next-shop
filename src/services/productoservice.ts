import ProductoModel from "@/model/producto";
import { producto } from "@/types/cliente";


class ProductoServicio{

    static async crearProducto(data: producto){
        if (data.precio<=0) {
            throw new Error("Precio no valido")
        }
        const producto = new ProductoModel(data);
        return await producto.save();
    }
        
}
export default ProductoServicio;  //exportar la clase