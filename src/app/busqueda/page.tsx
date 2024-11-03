"use client"

import ProductoBusqueda from '@/components/tarjetas/producto_busqueda';
import productos from '@/data/products';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Resultado_busqueda() {

    productos

    return (
        <div className="container text-center">
            <p className="fs-1 fw-bold">Resultados de la búsqueda: "cadena buscada"</p>
            <div className="row row-cols-4 row-cols-md-4 g-4">
                {productos.map((producto) => (
                    <div className="col" key={producto.id}>
                        <ProductoBusqueda
                            id={producto.id} // Asegúrate de pasar el id aquí
                            imagen={producto.imagen}
                            nombre={producto.nombre}
                            precio={producto.precioVenta}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}