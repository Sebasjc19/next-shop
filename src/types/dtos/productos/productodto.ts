export interface ProductoDTO {
    _id?: string; // Este es el ID que Mongoose genera automáticamente
    nombre: string;
    cantidad: number;
    categoria: string;
    precioVenta: number;
    precioCompra: number;
    descripcion: string;
    imagen: string;
}