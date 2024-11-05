"use client"

import productos from "@/data/products"
import Producto_perfil from "@/components/tarjetas/producto-perfil"
import Link from "next/link";

interface UbicacionCompraProps {
    ciudad: string;
    direccion: string;
}

export default function UbicacionCompra({ ciudad, direccion }: UbicacionCompraProps) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">Enviar a domicilio</h5>
                <p className="card-text fw-lighter">{ciudad}</p>
                <p className="card-text fw-lighter">{direccion}</p>
                <Link href="/compra/confirmacion_compra" passHref><button className="btn btn-primary">Seleccionar ubicación</button></Link>
            </div>
        </div>
    )
}