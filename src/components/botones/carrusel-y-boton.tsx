"use client";
import { useState } from 'react';
import Boton_agregar_imagen from './boton-agregar-imagen';
import Carrusel_producto_publicacion from '../imagenes/carrusel-producto-publicar';

export default function ContenedorCarruselYBoton() {
    // Estado de imágenes
    const [images, setImages] = useState<string[]>([
        'https://variety.com/wp-content/uploads/2024/09/The-Wild-Robot.jpg?w=1000&h=563&crop=1',
        'https://www.boningtontheatre.co.uk/wp-content/uploads/2024/09/the-wild-robot-668ec3182e643.jpg',
        'https://mundocine.es/wp-content/uploads/2024/09/TheWildRobot_Fotopelicula_31454.jpg'
    ]);

    // Función para agregar imagen al array `images`
    const handleAddImage = (newImage: string) => {
        setImages((prevImages) => [...prevImages, newImage]);
    };

    return (
        <div>
            <Carrusel_producto_publicacion images={images} />
            <Boton_agregar_imagen onAddImage={handleAddImage} />
        </div>
    );
}
