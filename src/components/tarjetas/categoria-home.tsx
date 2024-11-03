"use client"

import Link from "next/link";

interface CategoriaHomeProps {
    imagen: string;
    nombre: string;
}

export default function CategoriaHome({ imagen, nombre }: CategoriaHomeProps) {
    return (
        <div className="card h-100">
            <img src={imagen} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <Link href="/product/categories_home/producto_categoria" passHref><button className="btn btn-primary">Ver categoría</button></Link>
            </div>
        </div>
    )
}