import { DetalleDTO } from "./detalledto";

export interface CrearFacturaDTO{
    cliente: string,
    ubicacion: string,
    detalles: DetalleDTO[];
}