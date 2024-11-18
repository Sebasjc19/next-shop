import Image from "next/image";
import styles from "./page.module.css";
import ProductoCard from "@/components/producto-card";
import Categories_home from "./product/categories_home/page";

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
            <h1 className="fw-light">Next-shop</h1>
            <p className="lead text-body-secondary">Encuentra lo que necesitas en cualquier momento</p>
          </div>
        </div>
      </section>

      <Categories_home/>

    </main>
  );
}
