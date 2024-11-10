import { NextRequest, NextResponse } from "next/server";
import CategoriaModel from "@/model/categoria";
import CategoriaService from "@/services/categoriaservice";
import connect from "@/lib/db";


/*
*  POST /api/categorias
Crea una categoria
 */
export async function POST(request: NextRequest) {
    await connect();
    const data = await request.json();

    try {
        const categoria = await CategoriaService.crearCategoria(data);
        return NextResponse.json(categoria);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}

/*
* GET /api/categorias
Obtiene todas las  categorias
 */
export async function GET(request: NextRequest) {
    await connect();
    try {
        const categorias = await CategoriaService.obtenerCategorias(); // Usa await aquí
        return NextResponse.json(categorias);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}
