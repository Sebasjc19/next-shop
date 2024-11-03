"use client"

import Link from "next/link";

interface CategoriaHomeProps {
    imagen: string;
    nombre: string;
    precio: number;
}

export default function ProductoCategoria({ imagen, nombre, precio}: CategoriaHomeProps) {
    return (
        <div className="card mb-3" style={{maxWidth: "540px;"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imagen} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">{precio}</p>
                        <Link href="/product/product_information" passHref><button className="btn btn-primary">Ver producto</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}