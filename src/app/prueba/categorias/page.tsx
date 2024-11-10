"use client";

import { probarCategorias } from '@/data/prueba';
import React from 'react';

export default function Prueba_categoria() {
    const handleClick = () => {
        probarCategorias();
        alert("¡Botón presionado!");
    };

    return (
        <div>
            <button onClick={handleClick}>Presionar</button>
        </div>
    );
}
