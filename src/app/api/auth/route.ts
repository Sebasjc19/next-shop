import { NextRequest, NextResponse } from 'next/server';
import AuthService from '@/services/authservice';
import connect from "@/lib/db";

/*
* Esto es en donde se iniciará sesión
*/
export async function POST(request: NextRequest) {
    await connect();    
    const { email, password } = await request.json();

    try {
        const token = await AuthService.iniciarSesion(email, password);
        return NextResponse.json({ token });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 401 });
        }
        return NextResponse.json({ error: 'Error desconocido' }, { status: 401 });
    }
}