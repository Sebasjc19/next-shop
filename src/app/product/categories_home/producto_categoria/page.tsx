"use client";

import ProductoCategoria from '@/components/tarjetas/producto-categoria';
import productos from '@/data/products';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Categories_home() {
    return (
        <main>
            <section className="py-3 text-center container"> {/* Sección de encabezado */}
                <div className="row">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Productos de la categoría: Organizar</h1>
                        <p className="lead text-body-secondary">Aquí encontrarás todos los productos de la categoría Organizar.</p>
                    </div>
                </div>
            </section>

            <div className="album py-5 bg-body-tertiary"> {/* Sección para los productos */}
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> {/* Organiza los productos en columnas */}
                        {productos.map((producto) => (
                            <div className="col" key={producto.id}>
                                <ProductoCategoria 
                                    id={producto.id}
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
