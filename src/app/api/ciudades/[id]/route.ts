import { NextRequest, NextResponse } from "next/server";
import CiudadService from "@/services/ciudadservice";
import connect from "@/lib/db";

/*
* GET /api/ciudad/:id
Obtiene una ciudad segun su id
 */
export async function GET(request: NextRequest,  { params }: { params: { id: string }}) {
    const parametros = await params;
    const id = parametros.id;
    try {
        const departamentos = await CiudadService.obtenerCiudad(id);
        return NextResponse.json(departamentos);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}
