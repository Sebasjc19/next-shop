// utils/FakeAuth.js
class AuthService {

    logged: boolean

    constructor() {
      this.logged = false; // Estado inicial de autenticación
    }
  

    // Método para verificar la autenticación
    isAuthenticated() {
      return this.logged;
    }
  }
  
  export default new AuthService(); // Exportamos una instancia única de la clase