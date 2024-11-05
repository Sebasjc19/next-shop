"use client"

import productos from "@/data/products"
import Producto_perfil from "@/components/tarjetas/producto-perfil"

export default function Detail() {

    // Información de los productos
    productos

    return (
        <div className="container text-center">
            <section className="py-3 text-center container"> {/* Sección de encabezado */}
                <div className="row">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Mi perfil</h1>
                        <p className="lead text-body-secondary">Gestiona tus compras desde aquí</p>
                    </div>
                </div>
            </section>
            {/*Fila 1*/}
            <div className="row">
                {/*Columna 1*/}
                <div className="col text-start">
                    <div className="container bg-body-secondary p-4">
                        <img src="https://variety.com/wp-content/uploads/2024/09/The-Wild-Robot.jpg?w=1000&h=563&crop=1" className="img-fluid" alt="..."></img>
                        <p className="fs-4">Nombre de usuario</p>
                    </div>
                </div>
                {/*Columna 2*/}
                <div className="col">
                    <div className="container bg-body-secondary p-4">
                        <p className="fs-2 fw-bold">Mis compras</p>
                        <div className="row">
                            {productos.map((producto, index) => (
                                <Producto_perfil
                                    key={index}
                                    imagen={producto.imagen}
                                    nombre={producto.nombre}
                                    precio={producto.precioVenta}
                                    fecha={"fecha pendiente de organizar"}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}