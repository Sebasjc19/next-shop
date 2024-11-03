"use client"

import Fila_producto from "@/components/fila-producto"
import Link from "next/link"

export default function Table_products() {

    // Información de los productos
    const productos = [
        {
            id: '1',
            nombre: 'Pokemon Rojo Fuego',
            precio: '$10.00',
            stock:12
        },
        {
            id:'2',
            nombre: 'Nintendo Switch',
            precio: '$15.00',
            stock:20
        },
        // Agrega más productos aquí
        {
            id: '3',
            nombre: 'The Legend of Zelda: Breath of the Wild',
            precio: '$25.00',
            stock: 8
        },
        {
            id: '4',
            nombre: 'Super Mario Odyssey',
            precio: '$20.00',
            stock: 15
        },
        {
            id: '5',
            nombre: 'PlayStation 5',
            precio: '$499.00',
            stock: 5
        },
        {
            id: '6',
            nombre: 'Xbox Series X',
            precio: '$499.00',
            stock: 7
        },
    ];

    return (
        <div className="container text-center">
            <div className="row ">
                <div className="row">
                    <div className="col">
                        <p className="text-center fs-1 fw-bold">Mis productos</p>
                    </div>
                    <div className="col text-end">
                        <Link href="/product/publish_product" passHref><button type="button" className="btn btn-success btn-lg">Agregar producto</button></Link>
                    </div>
                </div>
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre del producto</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto, index) => (
                                <Fila_producto
                                    key={index}
                                    id={producto.id}
                                    nombre={producto.nombre}
                                    precio={producto.precio}
                                    stock={producto.stock}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    Fila 3
                </div>
            </div>
        </div>
    )
}