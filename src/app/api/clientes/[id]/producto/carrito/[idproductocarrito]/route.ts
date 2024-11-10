import { NextRequest, NextResponse } from "next/server";
import ClienteService from "@/services/clienteservice";
import connect from "@/lib/db";

/*
* PUT /api/clientes/[id]/producto/carrito/[:idproductocarrito]
Agrega un id de producto al carrito de compras
 */
export async function PUT(request: NextRequest,  { params }: { params: { id: string; idproductocarrito: string } }) {
    await connect();
    const parametros = await params;
    const id = parametros.id;
    const idproducto =  parametros.idproductocarrito;

    try {
        const cliente = await ClienteService.toggleProductoCarrito(id,idproducto);
        return NextResponse.json(cliente);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}
