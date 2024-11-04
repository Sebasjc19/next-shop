import { NextRequest, NextResponse } from "next/server";
import ClienteService from "@/services/clienteservice";
import connect from "@/lib/db";

/*
* GET /api/cliente/:id
Obtiene un cliente segun su id
 */
export async function GET(request: NextRequest,  { params }: { params: { id: string }}) {
    const parametros = await params;
    const id = parametros.id;
    try {
        const cliente = await ClienteService.obtenerCliente(id);
        return NextResponse.json(cliente);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}

/*
* PUT /api/cliente/:id
Modifica un cliente segun su id
 */
export async function PUT(request: NextRequest,  { params }: { params: { id: string }}) {
    const parametros = await params;
    const id = parametros.id;
    const data = await request.json();

    try {
        const cliente = await ClienteService.modificarCliente(id,data);
        return NextResponse.json(cliente);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}

/*
* DELETE /api/cliente/:id
Elimina un cliente segun su id
 */
export async function DELETE(request: NextRequest,  { params }: { params: { id: string }}) {
    
    const parametros = await params;
    const id = parametros.id;

    try {
        await ClienteService.eliminarCliente(id);
        return NextResponse.json({ message: "Cliente eliminado exitosamente" }, { status: 200 });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}