"use client"

import productos from "@/data/products"
import Producto_perfil from "@/components/tarjetas/producto-perfil"

interface EncabezadoTituloProps {
    mensajePrincipal: string;
    mensajeSecundario: string;
}

export default function EncabezadoTitulo({ mensajePrincipal, mensajeSecundario }: EncabezadoTituloProps) {
    return (
        <section className="py-3 text-center container"> {/* Sección de encabezado */}
            <div className="row">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">{mensajePrincipal}</h1>
                    <p className="lead text-body-secondary">{mensajeSecundario}</p>
                </div>
            </div>
        </section>
    )
}