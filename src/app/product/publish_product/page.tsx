"use client"

import { useEffect } from 'react';
import mongoose, { Schema, model, Model } from 'mongoose';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Boton_agregar_imagen from '@/components/botones/boton-agregar-imagen';
import Carrusel_producto_publicacion from '@/components/imagenes/carrusel-producto-publicar';
import ContenedorCarruselYBoton from '@/components/botones/carrusel-y-boton';
import AlertaExito from '@/components/alertas/exito';
import ProductoServicio from '@/services/productoservice';
import productos from '@/data/productos';

export default function Publish_product() {
    const [categorias, setCategorias] = useState<any[]>([]); // inicialización con un array vacío

    // Se definen los datos que van a usarse para crear un producto
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria] = useState('');
    const [precioCompra, setPrecioCompra] = useState(0);
    const [precioVenta, setPrecioVenta] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const [imagen, setImagen] = useState('');

    // Se obtienen las categorías de la API
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

    const guardarProducto = async () => {
        // Datos "quemados" del producto
        const datosProducto = {
            nombre: "Producto de prueba",
            descripcion: "Este es un producto de prueba",
            categoria: "6730cc4b9346a3b4b7f361f8",  // Cambiar por una categoría válida
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
                        {/*Aquí va el carrusel*/}
                        <Carrusel_producto_publicacion images={[
                            "https://www.koimoi.com/wp-content/new-galleries/2024/09/wild-robot-box-office-china-01.jpg",
                            "https://i0.wp.com/cocalecas.net/wp-content/uploads/2024/09/the-wild-robot-1.jpg?ssl=1",
                            "https://definicion.de/wp-content/uploads/2009/12/paisaje-1.jpg",
                            "https://bargainfotos.com/blog/wp-content/uploads/2022/07/beautiful-shot-of-small-lake-with-wooden-rowboat-in-focus-and-breathtaking-clouds-in-the-sky.jpg"
                        ]}/>
                        <img src="..." className="img-fluid" alt="..." />
                        <div className="input-group">
                            <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
                        </div>
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
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Precio de compra</label>
                                <input type="text" className="form-control" id="precioCompra" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Precio de venta</label>
                                <input type="text" className="form-control" id="precioVenta" />
                            </div>
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
