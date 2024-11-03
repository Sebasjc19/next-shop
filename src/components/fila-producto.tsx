"use client"

import Link from "next/link"

interface ProductoPerfilProps {
    id: string;
    nombre: string;
    precio: string;
    stock: number;
}

export default function Fila_producto({id, nombre, precio, stock}: ProductoPerfilProps) {
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{nombre}</td>
            <td>{precio}</td>
            <td>{stock}</td>
            <td>
                <Link href="/product/product_information" passHref><button type="button" className="btn btn-info me-2">Ver Detalles</button></Link>
                <Link href="/product/update_product" passHref><button type="button" className="btn btn-primary me-2">Actualizar</button></Link>
                <button type="button" className="btn btn-danger">Eliminar</button>
            </td>
        </tr>
    )
}