import ProductoModel from "@/model/producto";
import { CrearProductoDTO } from "@/types/dtos/productos/crearproductodto";
import { modificarProductoDTO } from "@/types/dtos/productos/modificarproductodto";


class ProductoServicio{

    static async crearProducto(data: CrearProductoDTO){
        if (data.cantidad == null || data.categoria == null || data.imagen == null  || data.nombre == null || data.precioCompra == null || data.precioVenta == null) {
            throw new Error("Uno o más atributos nulos");
        }
        if (data.precioCompra<=0 || data.precioCompra<=0) {
            throw new Error("Precio no valido")
        }
        const producto = new ProductoModel(data);
        return await producto.save();
    }

    static async modificarProducto(id: string, data: modificarProductoDTO){
        if (data.cantidad == null || data.categoria == null || data.imagen == null  || data.nombre == null || data.precioCompra == null || data.precioVenta == null) {
            throw new Error("Uno o más atributos nulos");
        }
        if (data.precioCompra<=0 || data.precioCompra<=0) {
            throw new Error("Precio no valido")
        }
        return  await ProductoModel.findByIdAndUpdate(id, data,  {new: true});
    }

    static async eliminarProducto(id: string){
        return await ProductoModel.findByIdAndDelete(id)
    }
  
    static async obtenerProducto(id: string){
        return await ProductoModel.findById(id)
    }

    static async obtenerProductos(){;
        return await ProductoModel.find();
    }

    static async obtenerProductosPorCategoria(idcategoria: string){
        return await ProductoModel.find({ categoria: idcategoria })
    }

    static async obtenerProductosPorNombre(nombre: string){
        const regex = new RegExp(nombre, "i"); // "i" para hacer la búsqueda insensible a mayúsculas
        return await ProductoModel.find( { nombre: regex } );
    }
        
}
export default ProductoServicio;  //exportar la clase