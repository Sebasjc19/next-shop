import { NextRequest, NextResponse } from "next/server";
import CategoriaModel from "@/model/categoria";
import CategoriaService from "@/services/categoriaservice";
import connect from "@/lib/db";
import { ok } from "assert";

/*
*  GET /api/categorias/:id
*/
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    await connect(); // Conectar a la base de datos

    const { id } = params;

    try {
        const categoria = await CategoriaService.obtenerCategoriaPorId(id); // Se llama al método que obtiene la categoría por su ID
        if (!categoria) {
            return NextResponse.json({ error: "Categoría no encontrada" }, { status: 404 });
        }
        return NextResponse.json(categoria); // Se retorna la categoría si se encuentra
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}

/*
*  PUT /api/categorias/:id
*/
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    await connect();

    const { id } = params;
    const data = await request.json();

    try {
        const categoria = await CategoriaService.modificarCategoria(id, data); // Encuentra todas las categorías
        return NextResponse.json(categoria);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    await connect();

    const { id } = params;
    
    

    try {
        const productoEliminado = await CategoriaService.eliminarCategoria(id);

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