"use client";

import ProductoCategoria from '@/components/tarjetas/producto-categoria';
import productos from '@/data/products';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Categories_home() {

    productos

    return (
        <div className="container text-center">
            <p className="fs-1 fw-bold">Productos de la categoría: Organizar</p>
            <div className="row row-cols-4 row-cols-md-4 g-4">
                {productos.map((producto) => (
                    <div className="col" key={producto.id}>
                        <ProductoCategoria imagen={producto.imagen} nombre={producto.nombre} precio={producto.precioVenta}/>
                    </div>
                ))}
            </div>
        </div>
    )
}