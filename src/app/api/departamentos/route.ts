import { NextRequest, NextResponse } from "next/server";
import DepartamentoService from "@/services/departamentoservice";

import ProductoServicio from "@/services/productoservice";
import connect from "@/lib/db";


/*
*  POST /api/departamentos
Crea un departamento
 */
export async function POST(request: NextRequest) {
    await connect();
    const nombre = await request.json();

    try {
        const departamento = await DepartamentoService.crearDepartamento(nombre);
        return NextResponse.json(departamento);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}

/*
* GET /api/departamentos
Obtiene todos los departamentos
 */
export async function GET(request: NextRequest) {
    await connect();
    try {
        const departamentos = await DepartamentoService.obtenerDepartamentos(); // Usa await aquí
        return NextResponse.json(departamentos);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}
