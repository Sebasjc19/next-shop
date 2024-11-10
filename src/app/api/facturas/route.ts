import { NextRequest, NextResponse } from "next/server";
import FacturaService from "@/services/facturaservice";
import connect from "@/lib/db";


/*
*  GET /api/facturas
Obtiene las facturas
 */
export async function GET(request: NextRequest) {
    await connect();

    try {
        const facturas = await FacturaService.obtenerFacturas();
        return NextResponse.json(facturas);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}

/*
* POST /api/facturas
Crea una factura
 */
export async function POST(request: NextRequest) {
    await connect();
    const data =  await request.json();
    try {
        const factura = await FacturaService.crearFactura(data); // Usa await aquí
        return NextResponse.json(factura);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}
