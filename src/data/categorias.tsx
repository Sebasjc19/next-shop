type Categoria = {
    id: number;
    imagen: string;
    nombre: string;
};

export const cargarCategorias = async () => {
    try {
        // Realizar una solicitud GET para obtener todas las categorías
        const response = await fetch('/api/categorias', {
            method: 'GET',  // Usamos GET para obtener los datos
            headers: {
                'Content-Type': 'application/json',
            }
        });

        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error al obtener las categorías:', errorData);
            return;
        }

        // Guardar las categorías obtenidas en una variable
        const categorias = await response.json();
        console.log("Categorías obtenidas:", categorias);

        // Puedes usar las categorías como quieras, por ejemplo, en un estado si estás en un componente de React
        return categorias; // Aquí puedes devolver las categorías si las necesitas en otra parte del código

    } catch (error) {
        console.error("Error al cargar las categorías:", error);
    }
};

// Llamar a la función para cargar las categorías
cargarCategorias().then(categorias => {
    if (categorias) {
        console.log("Categorías guardadas:", categorias);
    }
});
