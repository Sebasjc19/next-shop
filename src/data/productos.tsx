type Producto = {
    id: number;
    nombre: string;
    cantidad: number;
    categoria: string;
    precioCompra: number;  // Cambiado de precio a precioCompra
    precioVenta: number;    // Añadido precioVenta
    descripcion: string;
    imagen: string;
  };
  
  const productos: Producto[] = [
    {
        id: 1,
        nombre: "Camiseta de algodón",
        cantidad: 50,
        categoria: "Ropa",
        precioCompra: 10.00,  // Precio de compra
        precioVenta: 15.99,    // Precio de venta
        descripcion: "Camiseta de algodón 100% suave y cómoda, perfecta para el día a día.",
        imagen: "https://frutocuatro.com/wp-content/uploads/2018/05/camiseta-64000-royal-frente.jpg"
    },
    {
        id: 2,
        nombre: "Auriculares Bluetooth",
        cantidad: 30,
        categoria: "Electrónica",
        precioCompra: 40.00,
        precioVenta: 59.99,
        descripcion: "Auriculares inalámbricos con excelente calidad de sonido y cancelación de ruido.",
        imagen: "https://tienda.movistar.com.co/media/catalog/product/cache/ebd1de6550e0d0b8d8c505e2a09b56c4/a/i/airpods01_1.jpg"
    },
    {
        id: 3,
        nombre: "Botella de agua reutilizable",
        cantidad: 100,
        categoria: "Accesorios",
        precioCompra: 8.00,
        precioVenta: 12.99,
        descripcion: "Botella de acero inoxidable, ideal para mantener tus bebidas frías o calientes.",
        imagen: "https://copservir.vtexassets.com/arquivos/ids/861908-800-auto?v=638063011289100000&width=800&height=auto&aspect=true"
    },
    {
        id: 4,
        nombre: "Café orgánico",
        cantidad: 20,
        categoria: "Alimentos",
        precioCompra: 5.00,
        precioVenta: 9.99,
        descripcion: "Café orgánico de alta calidad, cultivado de manera sostenible.",
        imagen: "https://juanvaldez.vtexassets.com/arquivos/ids/156492/SKU-20978-_1.jpg?v=638489791497600000"
    },
    {
        id: 5,
        nombre: "Zapatos deportivos",
        cantidad: 25,
        categoria: "Calzado",
        precioCompra: 30.00,
        precioVenta: 45.99,
        descripcion: "Zapatos cómodos y ligeros, ideales para correr y entrenar.",
        imagen: "https://lopidonline.com/cdn/shop/files/WhatsAppImage2024-04-02at5.56.48PM.jpg?v=1712610958"
    },
    {
        id: 6,
        nombre: "Mochila impermeable",
        cantidad: 40,
        categoria: "Accesorios",
        precioCompra: 20.00,
        precioVenta: 29.99,
        descripcion: "Mochila resistente al agua, perfecta para viajes o el día a día.",
        imagen: "https://losvictorinos.co/cdn/shop/files/54-PhotoRoom.jpg?v=1700062663"
    },
    {
        id: 7,
        nombre: "Lámpara de escritorio LED",
        cantidad: 15,
        categoria: "Hogar",
        precioCompra: 15.00,
        precioVenta: 22.99,
        descripcion: "Lámpara LED ajustable con varios niveles de brillo, ideal para estudios y oficinas.",
        imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacCO/293523/public"
    },
    {
        id: 8,
        nombre: "Libro de recetas saludables",
        cantidad: 60,
        categoria: "Libros",
        precioCompra: 10.00,
        precioVenta: 14.99,
        descripcion: "Libro con más de 100 recetas saludables y fáciles de preparar.",
        imagen: "https://i.blogs.es/79547b/_mg_6923_1/450_1000.jpg"
    }
  ];
  
  export default productos;