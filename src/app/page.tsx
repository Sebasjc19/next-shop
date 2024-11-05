import Image from "next/image";
import styles from "./page.module.css";
import ProductoCard from "@/components/producto-card";

export default function Home() {

  //DATOS QUEMADOS DE PRUEBA
  const productos = [
    { id: 1, nombre: "Producto 1", precio: 1 },
    { id: 2, nombre: "Producto 2", precio: 2 },
    { id: 3, nombre: "Producto 3", precio: 3 },
    { id: 4, nombre: "Producto 4", precio: 5 },
    // Agrega más productos según sea necesario
  ];


  return (
    <main>

      <section className="py-5 text-center container">

        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Album example</h1>
            <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {productos.map(producto => (
              <ProductoCard key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}
