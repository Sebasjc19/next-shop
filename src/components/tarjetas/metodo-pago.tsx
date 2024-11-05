"use client";

import productos from "@/data/products";
import Producto_perfil from "@/components/tarjetas/producto-perfil";
import Link from "next/link";

interface MetodoPagoProps {
    nombre: string;
    imagen: string;
}

export default function MetodoPago({ nombre, imagen }: MetodoPagoProps) {
    return (
        <div className="container text-start d-flex justify-content-center"> {/* Centrar la tarjeta */}
            <div className="card" style={{ width: "18rem" }}>
                <img src={imagen} className="card-img-top" alt={nombre} />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <hr className="my-2" />
                </div>
                <div className="card-body d-flex justify-content-center mt-3"> {/* Centrar el botón */}
                    <Link href="/compra/metodo_pago" passHref>
                        <button className="btn btn-primary">Confirmar compra</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
