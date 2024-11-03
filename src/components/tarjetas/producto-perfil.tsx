"use client"

interface ProductoPerfilProps {
    imagen: string;
    nombre: string;
    precio: number;
    fecha: string;
}

export default function Producto_perfil({imagen, nombre, precio, fecha }: ProductoPerfilProps) {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center">
                    <img src={imagen} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8 text-start">
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="fs-6">${precio}</p>
                        <p className="fs-6">{fecha}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}