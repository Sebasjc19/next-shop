import { NextRequest, NextResponse } from "next/server";
import CiudadService from "@/services/ciudadservice";
import connect from "@/lib/db";


/*
*  POST /api/ciudad
Crea una ciudad
 */
export async function POST(request: NextRequest) {
    await connect();
    const data = await request.json();

    try {
        const ciudad = await CiudadService.crearCiudad(data);
        return NextResponse.json(ciudad);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}

/*
* GET /api/ciudad
Obtiene todos las ciudades
 */
export async function GET(request: NextRequest) {
    await connect();
    try {
        const ciudades = await CiudadService.obtenerCiudades(); // Usa await aquí
        return NextResponse.json(ciudades);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}
