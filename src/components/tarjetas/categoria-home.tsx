"use client"

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
                <a href="#" className="btn btn-primary">Ver categoría</a>
            </div>
        </div>
    )
}