"use client";

import { crearCategorias } from '@/data/categorias';
import React from 'react';

export default function Prueba_categoria() {
    const handleClick = () => {
        crearCategorias();
        alert("¡Botón presionado!");
    };

    return (
        <div>
            <button onClick={handleClick}>Presionar</button>
        </div>
    );
}
