import { NextRequest, NextResponse } from "next/server";
import ProductoServicio from "@/services/productoservice";
import connect from "@/lib/db";



/*
* Función que conecta con el backend para obtener productos mediante que tenga un nombre similar
*  GET /api/productos/nombresimilar/:nombre
*/
export async function GET(request: NextRequest, { params }: { params: { nombre: string } }) {
    await connect();

    const { nombre } = await params;

    try {
        const productos = await ProductoServicio.obtenerProductosPorNombre(nombre);
        return NextResponse.json(productos);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}
