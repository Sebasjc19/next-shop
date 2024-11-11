"use client"; // Para indicar que este componente es del lado del cliente

import React, { useEffect, useState } from "react";
import CategoriaHome from '@/components/tarjetas/categoria-home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Categories_home() {
    // Estado para almacenar las categorías
    const [categorias, setCategorias] = useState<any[]>([]);

    // Usar useEffect para hacer la llamada a la API cuando el componente se monte
    useEffect(() => {
        const obtenerCategorias = async () => {
            try {
                // Hacer la petición GET a la API para obtener las categorías
                const response = await fetch('/api/categorias');

                // Verificar si la respuesta es exitosa
                if (response.ok) {
                    const data = await response.json();
                    setCategorias(data); // Almacenar la respuesta en el estado
                } else {
                    console.error('Error al obtener categorías:', response.status);
                }
            } catch (error) {
                console.error('Error al hacer la petición:', error);
            }
        };

        obtenerCategorias(); // Llamar la función para obtener las categorías
    }, []); // El arreglo vacío asegura que solo se ejecute una vez cuando el componente se monte

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
                            <div className="col" key={categoria._id}> {/*se verifica que sea unica cada categoria*/}
                                <CategoriaHome
                                    id={categoria._id}
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
