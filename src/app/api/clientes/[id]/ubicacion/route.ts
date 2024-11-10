import { NextRequest, NextResponse } from "next/server";
import ClienteService from "@/services/clienteservice";
import connect from "@/lib/db";


/*
* GET /api/cliente/:id/ubicacion
Obtiene una lista de ubicaciones del cliente
 */
export async function GET(request: NextRequest,  { params }: { params: { id: string }}) {
    await connect();
    
    const parametros = await params;
    const id = parametros.id;

    try {
        const cliente =  await ClienteService.obtenerUbicaciones(id);
        return NextResponse.json(cliente);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}



/*
* POST /api/cliente/:id/ubicacion
Obtiene un cliente al guardar una ubicacion
 */
export async function POST(request: NextRequest,  { params }: { params: { id: string }}) {
    await connect();
    
    const parametros = await params;
    const id = parametros.id;
    const data = await request.json();

    try {
        const cliente =  await ClienteService.agregarUbicacion(id,data);
        return NextResponse.json(cliente);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}
