"use client"; // Para indicar que este componente es del lado del cliente

import React, { useEffect, useState } from "react";
import CategoriaHome from '@/components/tarjetas/categoria-home';
import { cargarCategorias, Categoria } from '@/data/categorias';  // Asumiendo que esta es la función que carga las categorías
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Categories_home() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);  // Estado para almacenar las categorías
    const [loading, setLoading] = useState<boolean>(true);  // Estado de carga
    const [error, setError] = useState<string | null>(null);  // Estado de error

    // Cargar las categorías cuando el componente se monta
    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const categoriasData = await cargarCategorias();  // Obtener las categorías
                setCategorias(categoriasData);  // Actualizar el estado con las categorías
            } catch (err) {
                setError('Error al cargar las categorías');
            } finally {
                setLoading(false);  // Marcar como no cargando
            }
        };

        fetchCategorias();
    }, []);  // Solo se ejecuta una vez al montar el componente

    if (loading) return <p>Cargando categorías...</p>;
    if (error) return <p>{error}</p>;

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
