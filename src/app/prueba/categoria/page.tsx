"use client"

import { useState, useEffect } from "react";

const ListarCategorias = () => {
    const [categorias, setCategorias] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Llamar a la API para obtener las categorías
        const obtenerCategorias = async () => {
            try {
                const response = await fetch('/api/categorias'); // Llamar al endpoint de categorías
                if (response.ok) {
                    const data = await response.json();
                    setCategorias(data); // Actualizar el estado con las categorías obtenidas
                } else {
                    const errorData = await response.json();
                    setError(errorData.error || "Error desconocido");
                }
            } catch (error) {
                setError("Error al cargar las categorías");
                console.error(error);
            }
        };

        obtenerCategorias(); // Llamar al método al cargar el componente
    }, []);

    return (
        <div>
            <h1>Lista de Categorías</h1>
            {error && <p className="text-danger">{error}</p>}
            <ul>
                {categorias.map((categoria) => (
                    <li key={categoria._id}>{categoria.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListarCategorias;
