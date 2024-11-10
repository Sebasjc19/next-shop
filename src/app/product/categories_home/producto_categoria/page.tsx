"use client";

import ProductoCategoria from '@/components/tarjetas/producto-categoria';
import productos from '@/data/productos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useState } from 'react';

export default function Categories_home() {

    // Estado para almacenar los productos
    const [productos, setProductos] = useState<any[]>([]);

    // Usar useEffect para hacer la llamada a la API cuando el componente se monte
    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                // Hacer la petición GET a la API para obtener los productos
                const response = await fetch('/api/productos');

                // Verificar si la respuesta es exitosa
                if (response.ok) {
                    const data = await response.json();
                    setProductos(data); // Almacenar la respuesta en el estado
                } else {
                    console.error('Error al obtener productos:', response.status);
                }
            } catch (error) {
                console.error('Error al hacer la petición:', error);
            }
        };

        obtenerProductos(); // Llamar la función para obtener los productos
    }, []); // El arreglo vacío asegura que solo se ejecute una vez cuando el componente se monte


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
                        {productos.map((producto, index) => (
                            <div className="col" key={index}>
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
