"use client"; // Asegúrate de que este componente se ejecute en el cliente

import React, { useEffect, useState } from "react";
import ProductoCategoria from '@/components/tarjetas/producto-categoria';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CategoriaDTO } from "@/types/dtos/categoria/categoriadto";
import CategoriaService from "@/services/categoriaservice";
import { ProductoDTO } from "@/types/dtos/productos/productodto";

export default function ProductoCategoriaPage({ params }: { params: Promise<{ id: string }> }) {
    const [productos, setProductos] = useState<ProductoDTO[]>([]);
    const [categoria, setCategoria] = useState<CategoriaDTO | null>(null); // Estado para almacenar la categoría
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [id, setId] = useState<string | null>(null); // Estado para almacenar el `id`

    // Se usa React.use para desenvainar `params` y obtener el `id`
    useEffect(() => {
        const getParams = async () => {
            const resolvedParams = await params; // Desenvuelve la promesa de `params`
            setId(resolvedParams.id); // Establece el `id` en el estado
        };

        getParams(); // Ejecutar la función para obtener el parámetro `id`
    }, [params]); // Dependencia de `params` para actualizar el `id`

    // Llamada para obtener los productos de la categoría
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

    // Llamada para obtener la categoría
    useEffect(() => {
        if (!id) return;

        const fetchCategoria = async () => {
            try {
                const res = await fetch(`/api/categorias/${id}`);
                if (!res.ok) {
                    throw new Error("Error al obtener la categoría");
                }
                const data = await res.json();
                setCategoria(data);
            } catch (err) {
                setError("Hubo un problema al cargar la categoría.");
            }
        };

        fetchCategoria();
    }, [id]);

    // Se muestra si está cargando
    if (loading) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    //----------------------Estructura del page---------------------------------

    return (
        <main>
            <section className="py-3 text-center container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Productos de la categoría: {categoria?.nombre ?? "No disponible"}</h1>
                        <p className="lead text-body-secondary">Aquí encontrarás todos los productos de la categoría {categoria?.nombre}</p>
                    </div>
                </div>
            </section>

            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                        {productos.map((producto) => (
                            <div className="col" key={producto._id}>
                                <ProductoCategoria
                                    id={producto._id ?? ""}
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