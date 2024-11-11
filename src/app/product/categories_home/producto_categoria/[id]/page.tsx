"use client"; // Asegúrate de que este componente se ejecute en el cliente

import React, { useEffect, useState } from "react";
import ProductoCategoria from '@/components/tarjetas/producto-categoria';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Definimos el tipo de los productos
interface Producto {
    id: string;
    imagen: string;
    nombre: string;
    precioVenta: number;
}

export default function ProductoCategoriaPage({ params }: { params: Promise<{ id: string }> }) {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [id, setId] = useState<string | null>(null); // Estado para almacenar el `id`

    // Usamos React.use para desenvainar `params` y obtener el `id`
    useEffect(() => {
        const getParams = async () => {
            const resolvedParams = await params; // Desenvuelve la promesa de `params`
            setId(resolvedParams.id); // Establece el `id` en el estado
        };

        getParams(); // Ejecutar la función para obtener el parámetro `id`
    }, [params]); // Dependencia de `params` para actualizar el `id`

    useEffect(() => {
        if (!id) return; // Si no hay `id`, no hacer la llamada a la API

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

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <main>
            <section className="py-3 text-center container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Productos de la categoría: {id}</h1>
                        <p className="lead text-body-secondary">Aquí encontrarás todos los productos de la categoría.</p>
                    </div>
                </div>
            </section>

            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
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
