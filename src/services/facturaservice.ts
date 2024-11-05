import FacturaModel from "@/model/factura";
import { CrearFacturaDTO } from "@/types/dtos/factura/crearfacturadto";
import ClienteService from "./clienteservice";
import ProductoServicio from "./productoservice";

class FacturaService {

    static async crearFactura(data: CrearFacturaDTO) {

        //validacion de los datos de la factura
        if (data.detalles.length === 0) {
            throw new Error("No hay detalles en la factura");
        }
        if (!data.cliente) {
            throw new Error("No hay un cliente en la factura");
        }
        if (!data.ubicacion) {
            throw new Error("No hay una ubicación en la factura");
        }

        /* validacion de que sean objetos existentes
        * verifica si existe un cliente y si la ubicacion pertenece a su lista de ubicaciones
        * si no existe el cliente da error y si la ubicacion no existe dentro de la lista de ubicaciones da error
        */
        const cliente = await ClienteService.obtenerUbicacion(data.cliente, data.ubicacion);

        //Verifica cada detalle de la lista de detalles los datos
        for (let index = 0; index < data.detalles.length; index++) {
            const element = data.detalles[index];
            if (!element.cantidad || !element.precio || !element.producto) {
                throw new Error("No hay todos los campos en el detalle");
            }
            const producto = await ProductoServicio.obtenerProducto(element.producto);
            if (producto.precioVenta !== element.precio){
                throw new Error(`El precio del producto ${element.producto} no coincide con el precio de venta del producto`)
            }
        }
        const factura = new FacturaModel(data);
        return await factura.save();
    }

    static async obtenerFactura(id: string) {
        const factura = await FacturaModel.findById(id);
        if (!factura) {
            throw new Error('No se encontró la factura');
        }
        return await factura;
    }

    static async obtenerFacturas() {
        return await FacturaModel.find();
    }
    
    /* CREO QUE ESTE METODO SOBRA
    static async obtenerClienteFactura(id: string) {
        const cliente = await FacturaModel.findById(id).populate('cliente');
        if (!cliente) {
            throw new Error('No se encontró el cliente');
        }
        return await cliente;
    }
    */

    static async obtenerFacturasCliente(idcliente: string) {
        return await FacturaModel.find({ cliente: idcliente });
    }

}
export default FacturaService;  //exportar la clase