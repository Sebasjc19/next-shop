"use client"

import productos from "@/data/products"
import Producto_perfil from "@/components/tarjetas/producto-perfil"
import EncabezadoTitulo from "@/components/titulos/encabezado-titulo"
import UbicacionCompra from "@/components/tarjetas/ubicacion-compra"
import ubicaciones from "@/data/ubicaciones"

export default function SeleccionUbicacion() {

    ubicaciones

    return (
        <main>
            <EncabezadoTitulo
                mensajePrincipal={"Confirma tu compra"}
                mensajeSecundario={"Solo unos detalles y tu compra estará lista"}
            />
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row justify-content-center">
                        {ubicaciones.map((ubicacion) => (
                            <UbicacionCompra
                                key={ubicacion.id}
                                ciudad={ubicacion.ciudad}
                                direccion={ubicacion.direccion}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

