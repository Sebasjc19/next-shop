import { NextRequest, NextResponse } from "next/server";
import ProductoServicio from "@/services/productoservice";
import connect from "@/lib/db";


/*
*  POST /api/productos
Crea un producto
 */
export async function POST(request: NextRequest) {
    await connect();
    const data = await request.json();

    try {
        const producto = await ProductoServicio.crearProducto2(data);
        return NextResponse.json(producto);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}

/*
* GET /api/productos
Obtiene todos los productos
 */
export async function GET(request: NextRequest) {
    await connect();
    try {
        const productos = await ProductoServicio.obtenerProductos(); // Usa await aquí
        return NextResponse.json(productos);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}
