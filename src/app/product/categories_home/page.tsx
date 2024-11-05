"use client";

import CategoriaHome from '@/components/tarjetas/categoria-home';
import categorias from '@/data/categories';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Categories_home() {
    return (
        <main>
            <section className="py-3 text-center container"> {/* Sección de encabezado */}
                <div className="row">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Categorías</h1>
                        <p className="lead text-body-secondary">Explora y encuentra lo que necesites</p>
                    </div>
                </div>
            </section>

            <div className="album py-5 bg-body-tertiary"> {/* Sección para las categorías */}
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3"> {/* Organiza las categorías en columnas */}
                        {categorias.map((categoria) => (
                            <div className="col" key={categoria.id}>
                                <CategoriaHome
                                    imagen={categoria.imagen}
                                    nombre={categoria.nombre}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
