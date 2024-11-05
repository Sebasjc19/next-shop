"use client"

import productos from "@/data/products"
import Producto_perfil from "@/components/tarjetas/producto-perfil"
import EncabezadoTitulo from "@/components/titulos/encabezado-titulo"
import UbicacionCompra from "@/components/tarjetas/ubicacion-compra"
import ubicaciones from "@/data/ubicaciones"
import ProductoCompra from "@/components/tarjetas/producto-compra"

export default function CofirmacionCompra() {

    const ubicacionSeleccionada = ubicaciones[0];
    // Suponiendo que deseas mostrar el primer producto del arreglo
    const productoSeleccionado = productos[0]; // Cambia el índice para seleccionar otro producto
    // va de 0 a 7, porque son 8 productos


    return (
        <main>
            <EncabezadoTitulo
                mensajePrincipal={"Detalles de tu pedido"}
                mensajeSecundario={"Solo unos detalles y tu compra estará lista"}
            />
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row justify-content-center">
                        <ProductoCompra
                            nombre={productoSeleccionado.nombre}
                            imagen={productoSeleccionado.imagen}
                            precio={productoSeleccionado.precioVenta}
                            descripcion={productoSeleccionado.descripcion}
                            direccion={ubicacionSeleccionada.direccion}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}