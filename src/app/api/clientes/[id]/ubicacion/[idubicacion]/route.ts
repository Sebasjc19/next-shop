import { NextRequest, NextResponse } from "next/server";
import ClienteService from "@/services/clienteservice";
import connect from "@/lib/db";


/*
* GET /api/cliente/:id/ubicacion/:idubicacion
Obtiene una ubicacion del cliente segun su id de cliente y su id de ubicacion
 */
export async function GET(request: NextRequest,  { params }: { params: { id: string;  idubicacion: string } }) {
    await connect();
    
    const parametros = await params;
    const id = parametros.id;
    const idubicacion = parametros.idubicacion;

    try {
        const ubicacion =  await ClienteService.obtenerUbicacion(id,idubicacion);
        return NextResponse.json(ubicacion);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}

/*
* PUT /api/cliente/:id/ubicacion/:idubicacion
Obtiene un cliente segun su id de cliente y su id de ubicacion que se modifica
 */
export async function PUT(request: NextRequest,  { params }: { params: { id: string;  idubicacion: string } }) {
    await connect();
    
    const parametros = await params;
    const id = parametros.id;
    const idubicacion = parametros.idubicacion;
    const data = await request.json();

    try {
        const cliente =  await ClienteService.modificarUbicacion(id,idubicacion,data);
        return NextResponse.json(cliente);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}

/*
* DELETE  /api/cliente/:id/ubicacion/:idubicacion
Eliminar la ubicacion de cliente segun el id de la ubicacion
*/
export async function DELETE(request: NextRequest,  { params }: { params: { id: string;  idubicacion: string } }) {
    await connect();
    
    const parametros = await params;
    const id = parametros.id;
    const idubicacion = parametros.idubicacion;

    try {
        const cliente =  await ClienteService.eliminarUbicacion(id,idubicacion);
        return NextResponse.json(cliente);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}

