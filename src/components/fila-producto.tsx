"use client"

import Link from "next/link"

export default function Fila_producto() {
    return (
        <tr>
            <th scope="row">1</th>
            <td>Coca Cola - Jucaloca</td>
            <td>3200</td>
            <td>120</td>
            <td>
                <Link href="/product/product_information" passHref><button type="button" className="btn btn-info me-2">Ver Detalles</button></Link>
                <Link href="/product/update_product" passHref><button type="button" className="btn btn-primary me-2">Actualizar</button></Link>
                <button type="button" className="btn btn-danger">Eliminar</button>
            </td>
        </tr>
    )
}