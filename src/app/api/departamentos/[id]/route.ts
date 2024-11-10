import { NextRequest, NextResponse } from "next/server";
import DepartamentoService from "@/services/departamentoservice";

import ProductoServicio from "@/services/productoservice";
import connect from "@/lib/db";

/*
* GET /api/departamentos
Obtiene todos los departamentos
 */
export async function GET(request: NextRequest,  { params }: { params: { id: string }}) {
    await connect();
    const id = await params.id;
    try {
        const departamentos = await DepartamentoService.obtenerDepartamento(id); // Usa await aquí
        return NextResponse.json(departamentos);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
}
