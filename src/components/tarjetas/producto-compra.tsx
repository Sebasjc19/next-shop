"use client";

import productos from "@/data/products";
import Producto_perfil from "@/components/tarjetas/producto-perfil";
import Link from "next/link";

interface ProductoCompraProps {
    nombre: string;
    imagen: string;
    precio: number;
    descripcion: string;
    direccion: string;
}

export default function ProductoCompra({ nombre, imagen, precio, descripcion, direccion }: ProductoCompraProps) {
    return (
        <div className="container d-flex flex-column align-items-center"> {/* Centrar tarjeta y botón en columna */}
            <div className="card mb-3" style={{ width: "18rem" }}>
                <img src={imagen} className="card-img-top" alt={nombre} />
                <div className="card-body">
                    <h5 className="card-title">{direccion}</h5>
                    <hr className="my-2" />
                    <p className="card-text">{nombre}</p>
                    <hr className="my-2" />
                    <p className="card-text">{descripcion}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio: ${precio}</li>
                </ul>
            </div>
            {/* Botón debajo de la tarjeta */}
            <div className="mt-3 d-flex justify-content-center">
                <button className="btn btn-primary me-2">Confirmar compra</button>
                <Link href="/product/product_information" passHref>
                    <button className="btn btn-danger">Cancelar</button>
                </Link>
            </div>
        </div>
    );
}
