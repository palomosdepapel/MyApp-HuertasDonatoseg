import React from 'react'
import './ItemListContainer.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Pagination from "../Pagination/Pagination";
import Sidebar from "../Sidebar/Sidebar";
import Card from "../Card/Card";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const cards = [
    {
      id: 1,
      title: "Reloj Guess Análogo",
      description:
        "Reloj guess análogo, para hombre, tablero redondo colores azul y rosa, estilo index + arabigo, pulso silicona color azul, calendario , Diámetro: 44.00mm , Resistencia al agua: 10 bares",
      img: "/products/relojes/hombres/6R06810172.jpg",
      price: 1076000,
      discount: 1950000,
      category: "hombre",
    },
    {
      id: 2,
      title: "Reloj Edox Análogo",
      description:
        "Reloj Edox analogo, para dama, tablero redondo colores blanco y rosa, estilo index + arabigo, pulso silicona color blanco, calendario, cronografo , Diámetro: 38.00mm , Resistencia al agua: 30 bares",
      img: "/products/relojes/mujeres/2R06000141.jpg",
      price: 4509000,
      discount: 4800000,
      category: "mujer",
    },
    {
      id: 3,
      title: "Reloj Diesel On",
      description:
        "Reloj diesel analogo y digital, para hombre, tablero redondo color negro, estilo sin numeros, pulso lona color azul , Diámetro: 48.00mm , Resistencia al agua: 5 bares",
      img: "/products/relojes/inteligentes/7606000992.jpg",
      price: 690000,
      discount: 621000,
      category: "inteligente",
    },
    {
      id: 4,
      title: "Reloj Diesel Análogo",
      description:
        "Reloj diesel análogo, para hombre, tablero redondo color negro, estilo index, pulso silicona colores naranja y negro, calendario, cronografo , Diámetro: 48.00mm , Resistencia al agua: 5 bares",
      img: "/products/relojes/deportivos/698615140411.jpg",
      price: 1438000,
      discount: 1438000,
      category: "deportivos",
    },
    {
      id: 5,
      title: "Reloj Jeans Análogo",
      description:
        "Reloj jeans análogo, para dama, tablero redondo colores rosado y plateado, estilo puntos + arabigo, pulso acero color plateado , Diámetro: 22.70mm , Resistencia al agua: 1 bar",
      img: "/products/relojes/fashion/7206001111.jpg",
      price: 150000,
      discount: 120000,
      category: "fashion",
    },
    {
      id: 6,
      title: "Reloj Claude Bernard Análogo",
      description:
        "Reloj claude bernard analogo, para hombre, tablero redondo colores blanco y negro, estilo romanos, pulso cuero color negro, calendario , Diámetro: 39.00mm , Resistencia al agua: 3 bares",
      img: "/products/relojes/clasicos/R206000312.jpg",
      price: 753000,
      discount: 454000,
      category: "clasicos",
    },
  ];

  const { categoria } = useParams()
  const filtrado = categoria ? cards.filter((item) => item.category === categoria) : cards

  return (
    <main className="App-main mt-5 pt-5">

      <div className="container">
        <Breadcrumb />
      </div>

      <div className="container d-md-flex align-items-stretch">

        <Sidebar />

        <div id="content" className="p-2 p-md-2 pt-5">
          <section>
            <div className="container">
              <div className="row">

                {filtrado.map(({ title, description, img, price, discount }, index) => (
                  <Card
                    key={index}
                    title={title}
                    description={description}
                    price={price}
                    discount={discount}
                    img={img}
                  />
                ))}

              </div>
            </div>
            <div className="container pt-5">
              <div className="row">
                <Pagination />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default ItemListContainer