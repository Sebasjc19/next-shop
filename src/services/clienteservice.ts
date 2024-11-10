import ClienteModel from "@/model/cliente";
import { CrearClienteDTO } from "@/types/dtos/cliente/crearclientedto";
import { ModificarClienteDTO } from "@/types/dtos/cliente/modificarclientedto";
import ProductoServicio from "./productoservice";
import { CrearUbicacionDTO } from "@/types/dtos/ubicacion/crearubicaciondto";
import UbicacionService from "./ubicacionservice";
import { ModificarUbicacionDTO } from "@/types/dtos/ubicacion/modificarubicaciondto";
import { Types } from "mongoose";


class ClienteService {

    static async crearCliente(data: CrearClienteDTO) {
        const cliente = new ClienteModel(data);
        return await cliente.save();
    }

    static async modificarCliente(id: string, data: ModificarClienteDTO) {
        const cliente = await ClienteModel.findById(id);
        if (!cliente) {
            throw new Error('Cliente no encontrado');
        }
        return await ClienteModel.findByIdAndUpdate(id, { nombre: data.nombre, email: data.email }, { new: true });
    }

    static async eliminarCliente(id: string) {
        const cliente = await ClienteModel.findById(id);
        if (!cliente) {
            throw new Error('Cliente no encontrado');
        }
        return await ClienteModel.findByIdAndDelete(id);
    }

    static async obtenerCliente(id: string) {
        const cliente = await ClienteModel.findById(id);
        if (!cliente) {
            throw new Error('Cliente no encontrado');
        }
        return cliente;
    }

    static async toggleProductoFavorito(idcliente: string, idproducto: string) {

        // Verificar si el producto existe
        const producto = await ProductoServicio.obtenerProducto(idproducto);
        if (!producto) {
            throw new Error('Producto no encontrado');
        }

        // Buscar al cliente en la base de datos
        const cliente = await ClienteModel.findById(idcliente);
        if (!cliente) {
            throw new Error('Cliente no encontrado');
        }

        // Convertir idproducto a ObjectId
        const productoId = new Types.ObjectId(idproducto);

        // Verificar si el producto ya está en la lista de favoritos
        const index = cliente.productosFavoritos.findIndex(fav => fav.equals(productoId));

        if (index === -1) {
            // Si el producto no está en favoritos, lo añade
            cliente.productosFavoritos.push(productoId);
        } else {
            // Si el producto ya está en favoritos, lo elimina
            cliente.productosFavoritos.splice(index, 1);
        }

        // Guardar los cambios en el cliente
        return await cliente.save();;

    }

    static async toggleProductoCarrito(idcliente: string, idproducto: string) {

        // Verificar si el producto existe
        const producto = await ProductoServicio.obtenerProducto(idproducto);
        if (!producto) {
            throw new Error('Producto no encontrado');
        }

        // Buscar al cliente en la base de datos
        const cliente = await ClienteModel.findById(idcliente);
        if (!cliente) {
            throw new Error('Cliente no encontrado');
        }

        // Convertir idproducto a ObjectId
        const productoId = new Types.ObjectId(idproducto);

        // Verificar si el producto ya está en la lista de favoritos
        const index = cliente.carritoCompras.findIndex(fav => fav.equals(productoId));

        if (index === -1) {
            // Si el producto no está en favoritos, lo añade
            cliente.carritoCompras.push(productoId);
        } else {
            // Si el producto ya está en favoritos, lo elimina
            cliente.carritoCompras.splice(index, 1);
        }

        // Guardar los cambios en el cliente
        return await cliente.save();;

    }

    static async obtenerProductosFavoritos(idcliente: string) {
        // Verifica si el cliente existe en la base de datos
        const cliente = await ClienteModel.findById(idcliente).populate('productosFavoritos');

        if (!cliente) {
            throw new Error('Cliente no encontrado');
        }

        // Retorna los productos favoritos del cliente con toda su estructura
        return cliente.productosFavoritos;
    }

    static async obtenerProductosCarrito(idcliente: string) {
        // Verifica si el cliente existe en la base de datos
        const cliente = await ClienteModel.findById(idcliente).populate('carritoCompras');

        if (!cliente) {
            throw new Error('Cliente no encontrado');
        }

        // Retorna los productos favoritos del cliente con toda su estructura
        return cliente.carritoCompras;
    }

    static async agregarUbicacion(idcliente: string, data: CrearUbicacionDTO){
        const cliente = await ClienteModel.findById(idcliente);
        if (!cliente) {
            throw new Error('Cliente no encontrado');
        }
        const ubicacion = await UbicacionService.crearUbicacion(data);
        cliente.ubicaciones.push(ubicacion.id);
        return await cliente.save();
    }

    static async modificarUbicacion(idcliente: string, idubicacion: string, data: ModificarUbicacionDTO){
        const cliente = await ClienteModel.findById(idcliente);
        if (!cliente) {
            throw new Error('Cliente no encontrado');
        }
        const ubicacion = await UbicacionService.obtenerUbicacion(idubicacion);
        if (!ubicacion) {
            throw new Error('Ubicación no encontrada');
        }
        return await  await UbicacionService.modificarUbicacion(idubicacion,data);;
    }

    static async eliminarUbicacion(idcliente: string, idubicacion: string){
        const cliente = await ClienteModel.findById(idcliente);
        if (!cliente) {
            throw new Error('Cliente no encontrado');
        }
        const ubicacion = await UbicacionService.obtenerUbicacion(idubicacion);
        // Convertir idproducto a ObjectId
        const idubicacionobjectid = new Types.ObjectId(idubicacion);

        // Verificar si el producto ya está en la lista de favoritos
        const index = cliente.ubicaciones.findIndex(fav => fav.equals(idubicacionobjectid));

        if (index === -1) {
            throw new Error('Ubicación no encontrada en la lista de favoritos de  este cliente');
        } else {
            // Si el producto ya está en favoritos, lo elimina
            cliente.ubicaciones.splice(index, 1);
        }
        await UbicacionService.eliminarUbicacion(idubicacion);
        return cliente.save();
    }

    static async obtenerUbicacion(idcliente: string, idubicacion: string){
        const cliente = await ClienteModel.findById(idcliente);
        if(!cliente){
            throw new Error('Cliente no encontrado');
        }
        const ubicacion = await UbicacionService.obtenerUbicacion(idubicacion);
        // Convertir idproducto a ObjectId
        const idubicacionobjectid = new Types.ObjectId(idubicacion);

        // Verificar si el producto ya está en la lista ubicaciones
        const index = cliente.ubicaciones.findIndex(fav => fav.equals(idubicacionobjectid));

        if (index === -1) {
            throw new Error('Ubicación no encontrada en las ubicaciones de este cliente');
        } else {
            return ubicacion;
        }
    }

    static async obtenerUbicaciones(idcliente: string){
        // Verifica si el cliente existe en la base de datos
        const cliente = await ClienteModel.findById(idcliente).populate('ubicaciones');
        if (!cliente) {
            throw new Error('Cliente no encontrado');
        }

        // Retorna los productos favoritos del cliente con toda su estructura
        return cliente.ubicaciones;
    }

}
export default ClienteService;  //exportar la clase