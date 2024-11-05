import { NextRequest, NextResponse } from "next/server";
import ClienteService from "@/services/clienteservice";
import connect from "@/lib/db";


/*
*  POST /api/cliente
Crea un cliente
 */
export async function POST(request: NextRequest) {
    await connect();
    const data = await request.json();
    try {
        const cliente = await ClienteService.crearCliente(data);
        return NextResponse.json(cliente);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}


