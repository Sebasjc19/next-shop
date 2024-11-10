"use client"

import { useEffect } from 'react';
import mongoose, { Schema, model, Model } from 'mongoose';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Boton_agregar_imagen from '@/components/botones/boton-agregar-imagen';
import Carrusel_producto_publicacion from '@/components/imagenes/carrusel-producto-publicar';
import ContenedorCarruselYBoton from '@/components/botones/carrusel-y-boton';
import categorias from '@/data/categorias';
import AlertaExito from '@/components/alertas/exito';
import ProductoServicio from '@/services/productoservice';

export default function Publish_product() {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria] = useState('');
    const [precioCompra, setPrecioCompra] = useState(0);
    const [precioVenta, setPrecioVenta] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const [imagen, setImagen] = useState('');
    const [alertaExito, setAlertaExito] = useState(false);  // Estado para la alerta de éxito


    categorias

    const guardarProducto = async () => {
        // Datos "quemados" del producto
        const datosProducto = {
            nombre: "Producto de prueba",
            descripcion: "Este es un producto de prueba",
            categoria: "1",  // Cambiar por una categoría válida
            precioCompra: 100,
            precioVenta: 150,
            cantidad: 10,
            imagen: "https://mundocine.es/wp-content/uploads/2024/09/TheWildRobot_Fotopelicula_31454.jpg",  // Nombre de la imagen
        };

        try {
            // Hacer la solicitud POST a la API de Next.js
            const response = await fetch('/api/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datosProducto), // Enviar los datos del producto
            });

            // Verificar si la respuesta fue exitosa
            if (response.ok) {
                const producto = await response.json();
                console.log('Producto creado:', producto);
                alert("adafasf");
            } else {
                const error = await response.json();
                console.error('Error al crear el producto:', error);
            }
        } catch (error) {
            console.error("Error al crear el producto:", error);
        }
    };

    return (
        <div className="container text-start">

            <div className="row align-items-start">
                <p className="text-center fs-1 fw-bold">Registrar producto</p>
                <div className="col">
                    <div className="row">
                        <ContenedorCarruselYBoton />
                    </div>
                </div>

                <div className="col">
                    <div className="p-3 bg-info bg-opacity-10 border border-info rounded-end">
                        <div className="row">
                            <div className="mb-3">
                                <label htmlFor="nombreProducto" className="form-label">Nombre del producto</label>
                                <input type="text" className="form-control" id="nombreProducto" aria-describedby="nombreAyuda" />
                                <div id="nombreAyuda" className="form-text">Dale a tu producto un nombre claro y corto</div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="mb-3">
                                <label htmlFor="descripcionProducto" className="form-label">Descripción del producto</label>
                                <textarea className="form-control" id="descripcionProducto" rows={5}></textarea>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <select className="form-select" aria-label="Default select example">
                                <option value="" disabled>
                                    Selecciona una categoría
                                </option>
                                {categorias.map((categoria) => (
                                    <option key={categoria.id} value={categoria.id}>
                                        {categoria.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="row">
                            <div className="row">
                                <div className="col d-flex justify-content-start">
                                    <button type="button" className="btn btn-danger me-2">Cancelar</button>
                                    <button type="button" className="btn btn-success" onClick={guardarProducto}>Guardar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
