"use client";

import React, { useState, ChangeEvent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Boton_agregar_imagen from "@/components/botones/boton-agregar-imagen";
import Carrusel_producto_publicacion from "@/components/imagenes/carrusel-producto-publicar";
import ContenedorCarruselYBoton from "@/components/botones/carrusel-y-boton";
import AlertaExito from "@/components/alertas/exito";
import ProductoServicio from "@/services/productoservice";
import categorias from "@/data/categorias";

type ProductoData = {
    nombre: string;
    descripcion: string;
    categoria: string;
    precioCompra: number;
    precioVenta: number;
    cantidad: number;
    imagen: string;
};

export default function PublishProduct() {
    const [nombre, setNombre] = useState<string>("");
    const [descripcion, setDescripcion] = useState<string>("");
    const [categoria, setCategoria] = useState<string>("");
    const [precioCompra, setPrecioCompra] = useState<number>(0);
    const [precioVenta, setPrecioVenta] = useState<number>(0);
    const [cantidad, setCantidad] = useState<number>(0);
    const [imagen, setImagen] = useState<string>("");
    const [alertaExito, setAlertaExito] = useState<boolean>(false); // Estado para la alerta de éxito

    categorias

    const handleSubmit = async () => {
        const productoData: ProductoData = {
            nombre,
            descripcion,
            categoria,
            precioCompra,
            precioVenta,
            cantidad,
            imagen,
        };

        try {
            // Llamada al backend para crear el producto
            const response = await fetch('/api/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productoData),
            });

            if (response.ok) {
                setAlertaExito(true); // Mostrar la alerta de éxito si se crea correctamente
            } else {
                const error = await response.json();
                throw new Error(error.message || 'Error desconocido');
            }
        } catch (error) {
            console.error(error);
            alert("Error al crear el producto");
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
                                <label htmlFor="nombreProducto" className="form-label">
                                    Nombre del producto
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombreProducto"
                                    value={nombre}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setNombre(e.target.value)}
                                    aria-describedby="nombreAyuda"
                                />
                                <div id="nombreAyuda" className="form-text">
                                    Dale a tu producto un nombre claro y corto
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="mb-3">
                                <label htmlFor="descripcionProducto" className="form-label">
                                    Descripción del producto
                                </label>
                                <textarea
                                    className="form-control"
                                    id="descripcionProducto"
                                    rows={5}
                                    value={descripcion}
                                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescripcion(e.target.value)}
                                ></textarea>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <select
                                className="form-select"
                                aria-label="Seleccionar categoría"
                                value={categoria}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => setCategoria(e.target.value)}
                            >
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
                                    <button type="button" className="btn btn-danger me-2">
                                        Cancelar
                                    </button>
                                    <button type="button" className="btn btn-success" onClick={handleSubmit}>
                                        Guardar
                                    </button>
                                </div>
                            </div>
                        </div>

                        {alertaExito && <AlertaExito mensaje="Producto registrado con éxito!" />}
                    </div>
                </div>
            </div>
        </div>
    );
}
