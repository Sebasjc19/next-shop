import { NextRequest, NextResponse } from "next/server";
import ProductoServicio from "@/services/productoservice";
import connect from "@/lib/db";



/*
* Función que conecta con el backend para obtener un producto
*  GET /api/productos/:id
*/
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    await connect();

    const { id } = await params;

    try {
        const producto = await ProductoServicio.obtenerProducto(id);
        return NextResponse.json(producto);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}

/*
* Función que conecta con el backend para actualizar un producto
*  PUT /api/productos/:id
*/
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    await connect();

    const { id } = params;
    const data = await request.json();

    try {
        const producto = await ProductoServicio.modificarProducto(id, data); // Encuentra todas las categorías
        return NextResponse.json(producto);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}

/*
* Función que conecta con el backend para eliminar un producto
*  DELETE /api/productos/:id
*/
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    await connect();

    const { id } = params;

    try {
        const productoEliminado = await ProductoServicio.eliminarProducto(id);

        if (!productoEliminado) {
            return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
        }
        return NextResponse.json({ message: "Producto eliminado exitosamente" }, { status: 200 });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}