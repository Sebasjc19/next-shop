import { NextRequest, NextResponse } from "next/server";
import FacturaService from "@/services/facturaservice";
import connect from "@/lib/db";



/*
* Función que obtiene una factura con un id
*  GET /api/facturas/:idfactura
*/
export async function GET(request: NextRequest, { params }: { params: { idfactura: string } }) {
    await connect();
    const parametros = await params;
    const id = parametros.idfactura

    try {
        const factura = await FacturaService.obtenerFactura(id);
        return NextResponse.json(factura);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}

