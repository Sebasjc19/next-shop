"use client";

import ProductoBusqueda from '@/components/tarjetas/producto_busqueda';
import productos from '@/data/products';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Resultado_busqueda() {
    // Aquí puedes agregar lógica para obtener la cadena buscada, si es necesario.

    return (
        <main>
            <section className="py-2 text-center container">
                <div className="row py-lg-2">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Resultados de la búsqueda</h1>
                        <p className="lead text-body-secondary">Aquí están los resultados para tu búsqueda: "cadena buscada"</p>
                    </div>
                </div>
            </section>

            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
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
            </div>
        </main>
    );
}
