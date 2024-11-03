import { NextRequest,NextResponse } from "next/server";
import ProductoServicio from "@/services/productoservice";
import connect from "@/lib/db";

export async function POST(request: NextRequest) {
    await connect();
    const data = await request.json();
  
    try {
      const producto = await ProductoServicio.crearProducto(data);
      return NextResponse.json(producto);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
          }
          return NextResponse.json({ error: "Unknown error" }, { status: 400 });
    }
  }