import CategoriaService from "@/services/categoriaservice";

export const probarCategorias = async () => {
    // Datos quemados para varias categorías
    const categorias = [
        {
            imagen: "https://th.bing.com/th/id/OIP.T-ZyABAAmrUy9tbl_7ukFgHaFf?rs=1&pid=ImgDetMain",
            nombre: "Tecnología"
        },
        {
            imagen: "https://th.bing.com/th/id/R.edd8003ee57604a434192dc541000494?rik=ExB%2fRBsof6QNlw&pid=ImgRaw&r=0",
            nombre: "Electrodomésticos"
        },
        {
            imagen: "https://th.bing.com/th/id/OIP.U1PvoCsAiSIgJlAddR_xowHaE7?rs=1&pid=ImgDetMain",
            nombre: "Muebles"
        },
        {
            imagen: "https://th.bing.com/th/id/R.f811466617736094fbcb4c0183be90e8?rik=EznO03iSN5XBWQ&pid=ImgRaw&r=0",
            nombre: "Deportes"
        },
        {
            imagen: "https://www.fashionsfever.com/wp-content/uploads/2021/11/different-type-makeup-products-black-backdrop.jpg",
            nombre: "Cuidado personal"
        },
        {
            imagen: "https://example.com/imagen3.jpg",
            nombre: "Deportes"
        },
        {
            imagen: "https://www.kordata.mx/wp-content/uploads/2022/06/ACOMODO_ROPA.jpg",
            nombre: "Moda"
        },
        {
            imagen: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2023/05/60380_alt11.jpeg",
            nombre: "Juguetes"
        },
        {
            imagen: "https://th.bing.com/th/id/R.7e43bb11c928ca7b0a09b0cb0b629f5f?rik=667oezbLN60sMA&pid=ImgRaw&r=0",
            nombre: "Libros"
        },
        {
            imagen: "https://produserv.com.co/wp-content/uploads/2019/09/oficina.jpg",
            nombre: "Oficina"
        },
        {
            imagen: "https://th.bing.com/th/id/OIP.Frfy2QSSN03jGT5EiFONsgHaHS?rs=1&pid=ImgDetMain",
            nombre: "Mascotas"
        }
    ];

    try {
        // Usamos un bucle para crear todas las categorías
        for (const datosCategoria of categorias) {
            const response = await fetch('/api/categorias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosCategoria)
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error al crear la categoría:', errorData);
                continue;  // Continuamos con la siguiente categoría
            }

            const nuevaCategoria = await response.json();
            console.log("Categoría creada:", nuevaCategoria);
        }
    } catch (error) {
        console.error("Error al crear las categorías:", error);
    }
};

// Llama a la función para probar
probarCategorias();
