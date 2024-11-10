import { NextRequest, NextResponse } from "next/server";
import FacturaService from "@/services/facturaservice";
import connect from "@/lib/db";



/*
* Función que obtiene las facturas de un cliente
*  GET /api/facturas/cliente/:idcliente
*/
export async function GET(request: NextRequest, { params }: { params: {idcliente: string} }) {
    await connect();
    const parametros = await params;
    const idcliente = parametros.idcliente;

    try {
        const factura = await FacturaService.obtenerFacturasCliente(idcliente);
        return NextResponse.json(factura);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}

