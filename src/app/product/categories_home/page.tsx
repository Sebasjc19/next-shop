"use client";

import CategoriaHome from '@/components/tarjetas/categoria-home';
import categorias from '@/data/categories';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Categories_home() {

    categorias

    return (
        <div className="container text-center">
            <p className="fs-1 fw-bold">Categorías</p>
            <div className="row row-cols-4 row-cols-md-4 g-4">
                {categorias.map((categoria) => (
                    <div className="col" key={categoria.id}>
                        <CategoriaHome imagen={categoria.imagen} nombre={categoria.nombre} />
                    </div>
                ))}
            </div>
        </div>
    );
}
