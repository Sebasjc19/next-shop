const categorias = [
    { id: 1, imagen: "https://th.bing.com/th/id/OIP.T-ZyABAAmrUy9tbl_7ukFgHaFf?rs=1&pid=ImgDetMain", nombre: "Tecnología" },
    { id: 2, imagen: "https://th.bing.com/th/id/R.edd8003ee57604a434192dc541000494?rik=ExB%2fRBsof6QNlw&pid=ImgRaw&r=0", nombre: "Electrodomésticos" },
    { id: 3, imagen: "https://th.bing.com/th/id/OIP.U1PvoCsAiSIgJlAddR_xowHaE7?rs=1&pid=ImgDetMain", nombre: "Muebles" },
    { id: 4, imagen: "https://th.bing.com/th/id/R.f811466617736094fbcb4c0183be90e8?rik=EznO03iSN5XBWQ&pid=ImgRaw&r=0", nombre: "Deportes" },
    { id: 5, imagen: "https://www.fashionsfever.com/wp-content/uploads/2021/11/different-type-makeup-products-black-backdrop.jpg", nombre: "Cuidado personal" },
    { id: 6, imagen: "https://www.kordata.mx/wp-content/uploads/2022/06/ACOMODO_ROPA.jpg", nombre: "Moda" },
    { id: 7, imagen: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2023/05/60380_alt11.jpeg", nombre: "Juguetes" },
    { id: 8, imagen: "https://th.bing.com/th/id/R.7e43bb11c928ca7b0a09b0cb0b629f5f?rik=667oezbLN60sMA&pid=ImgRaw&r=0", nombre: "Libros" },
    { id: 9, imagen: "https://produserv.com.co/wp-content/uploads/2019/09/oficina.jpg", nombre: "Oficina" },
    { id: 10, imagen: "https://th.bing.com/th/id/OIP.Frfy2QSSN03jGT5EiFONsgHaHS?rs=1&pid=ImgDetMain", nombre: "Mascotas" },
];

export const crearCategorias = async () => {
  const url = '/api/categorias'; // Asegúrate de que esta URL sea la correcta para tu API

  for (const categoria of categorias) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoria),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Categoría creada:', data);
      } else {
        console.error('Error al crear categoría:', response.status, await response.json());
      }
    } catch (error) {
      console.error('Error al realizar la petición:', error);
    }
  }
};

// Llamar la función para crear las categorías
crearCategorias();
