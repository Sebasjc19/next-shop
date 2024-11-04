"use client";

import productos from "@/data/products";
import Producto_perfil from "@/components/tarjetas/producto-perfil";
import Link from "next/link";

interface ProductoCompraProps {
    nombre: string;
    imagen: string;
    precio: number;
    descripcion: string;
}

export default function ProductoCompra({ nombre, imagen, precio, descripcion }: ProductoCompraProps) {
    return (
        <div className="container text-start d-flex justify-content-center"> {/* Centrar la tarjeta */}
            <div className="card" style={{ width: "18rem" }}>
                <img src={imagen} className="card-img-top" alt={nombre} />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <hr className="my-2" />
                    <p className="card-text">{descripcion}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio: ${precio}</li>
                </ul>
                <div className="card-body d-flex justify-content-center mt-3"> {/* Centrar el botón */}
                    <Link href="/compra/confirmacion_compra" passHref>
                        <button className="btn btn-primary" type="submit">Confirmar compra</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
