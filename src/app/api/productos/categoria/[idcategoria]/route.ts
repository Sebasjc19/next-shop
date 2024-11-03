import { NextRequest, NextResponse } from "next/server";
import ProductoServicio from "@/services/productoservice";
import connect from "@/lib/db";



/*
* Función que conecta con el backend para obtener productos por un id de categoria
*  GET /api/productos/:idcategoria
*/
export async function GET(request: NextRequest, { params }: { params: { idcategoria: string } }) {
    await connect();

    const { idcategoria } = await params;

    try {
        const productos = await ProductoServicio.obtenerProductosPorCategoria(idcategoria);
        return NextResponse.json(productos);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}
