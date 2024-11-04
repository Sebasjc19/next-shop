import { NextRequest, NextResponse } from "next/server";
import ClienteService from "@/services/clienteservice";
import connect from "@/lib/db";

/*
* PUT /api/clientes/[id]/producto/favorito/
Obtiene los productos de la lista de favoritos del cliente
 */
export async function GET(request: NextRequest,  { params }: { params: { id: string} }) {
    await connect();
    const parametros = await params;
    const id = parametros.id;

    try {
        const productos = await ClienteService.obtenerProductosFavoritos(id);
        return NextResponse.json(productos);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}
