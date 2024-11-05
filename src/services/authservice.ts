import jwt from 'jsonwebtoken';
import ClienteModel from '../model/cliente';
import { config } from '../../config/config'; // Archivo de configuración donde tienes la clave secreta

class AuthService {

    // Autenticación de cliente y generación de token JWT
    static async iniciarSesion(email: string, password: string): Promise<string> {
        
        const cliente = await ClienteModel.findOne({ email: email });
        if (!cliente || !(await cliente.compararPassword(password))) {
            throw new Error('Credenciales incorrectas');
        }
        // Generar un token JWT
        const token = jwt.sign({ id: cliente._id }, config.JWT_SECRET, { expiresIn: '24h' });
        return token;
    }

    // Verificación de token JWT
    static verificarToken(token: string): any {
        return jwt.verify(token, config.JWT_SECRET);
    }
}

export default AuthService;
