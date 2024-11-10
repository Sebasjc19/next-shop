import { NextRequest, NextResponse } from "next/server";
import ClienteService from "@/services/clienteservice";
import connect from "@/lib/db";

/*
* PUT /api/clientes/[id]/producto/favorito/[:idproducto]
Agrega un id de producto a la lista de favoritos del cliente
 */
export async function PUT(request: NextRequest,  { params }: { params: { id: string; idproductofavorito: string } }) {
    await connect();
    const parametros = await params;
    const id = parametros.id;
    const idproducto =  parametros.idproductofavorito;

    try {
        const cliente = await ClienteService.toggleProductoFavorito(id,idproducto);
        return NextResponse.json(cliente);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}
