"use client"

import Fila_producto from "@/components/fila-producto"
import Link from "next/link"

export default function Table_products() {
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
                            <Fila_producto/>
                            <Fila_producto/>
                            <Fila_producto/>
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