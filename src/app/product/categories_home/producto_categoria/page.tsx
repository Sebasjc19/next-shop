"use client";

import ProductoCategoria from '@/components/tarjetas/producto-categoria';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Definimos el tipo de los productos
interface Producto {
    id: string;
    imagen: string;
    nombre: string;
    precioVenta: number;
}

export default function Producto_categoria() {

    const router = useRouter();
    const { id } = router.query; // Obtén el id de la categoría desde la URL
    const [productos, setProductos] = useState<Producto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return; // Si no hay id, no hacer la llamada a la API

        const fetchProductos = async () => {
            try {
                const res = await fetch(`/api/productos/categoria/${id}`);
                if (!res.ok) {
                    throw new Error("Error al obtener productos");
                }
                const data = await res.json();
                setProductos(data);
            } catch (err) {
                setError("Hubo un problema al cargar los productos.");
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, [id]);

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
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3"> {/* Organiza los productos en columnas */}
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
