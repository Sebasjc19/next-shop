import { NextRequest,NextResponse } from "next/server";
import CategoriaService from "@/services/categoriaservice";
import connect from "@/lib/db";

export async function POST(request: NextRequest) {
    await connect();
    const data = await request.json();
  
    try {
      const categoria = await CategoriaService.crearCategoria(data);
      return NextResponse.json(categoria);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
          }
          return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
  }