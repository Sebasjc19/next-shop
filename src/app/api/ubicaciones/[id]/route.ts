import { NextRequest, NextResponse } from "next/server";
import UbicacionService from "@/services/ubicacionservice";
import connect from "@/lib/db";



/*
* Devuelve una ubicacion con un id
*  GET /api/ubicacion/:id
*/
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    await connect();

    const { id } = await params;

    try {
        const ubicacion = await UbicacionService.obtenerUbicacion(id);
        return NextResponse.json(ubicacion);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}

