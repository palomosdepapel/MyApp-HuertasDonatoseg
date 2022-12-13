import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import "./components/Navbar/Navbar.css";
//import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./components/ItemListContainer/ItemListContainer.css";
import Footer from "./components/Footer/Footer";
import "./components/Footer/Footer.css";
import Card from "./components/Card/Card";
import Cart from "./components/Cart/Cart";
import Pagination from "./components/Pagination/Pagination";
import Sidebar from "./components/Sidebar/Sidebar";
import Product from "./components/Product/Product";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

function App() {

  const cards = [
    {
      id: 1,
      title: "Reloj Guess Análogo",
      description:
        "Reloj guess análogo, para hombre, tablero redondo colores azul y rosa, estilo index + arabigo, pulso silicona color azul, calendario , Diámetro: 44.00mm , Resistencia al agua: 10 bares",
      img: "https://kevins.com.co/img/productos/6R06810172.jpg",
      price: 1076000,
      discount: 1950000,
      category: "Reloj, hombre", 
    },
    {
      id: 2,
      title: "Reloj Edox Análogo",
      description:
        "Reloj Edox analogo, para dama, tablero redondo colores blanco y rosa, estilo index + arabigo, pulso silicona color blanco, calendario, cronografo , Diámetro: 38.00mm , Resistencia al agua: 30 bares",
      img: "https://kevins.com.co/img/productos/2R06000141.jpg",
      price: 4509000,
      discount: 4800000,
      category: "Reloj, mujer", 
    },
    {
      id: 3,
      title: "Reloj Diesel On",
      description:
        "Reloj diesel analogo y digital, para hombre, tablero redondo color negro, estilo sin numeros, pulso lona color azul , Diámetro: 48.00mm , Resistencia al agua: 5 bares",
      img: "https://kevins.com.co/img/productos/7606000992.jpg",
      price: 690000,
      discount: 621000,
      category: "Reloj, inteligente", 
    },
    {
      id: 4,
      title: "Reloj Diesel Análogo",
      description:
        "Reloj diesel análogo, para hombre, tablero redondo color negro, estilo index, pulso silicona colores naranja y negro, calendario, cronografo , Diámetro: 48.00mm , Resistencia al agua: 5 bares",
      img: "https://kevins.com.co/img/productos/698615140411.jpg",
      price: 1438000,
      discount: 1438000,
      category: "Reloj, deportivos", 
    },
    {
      id: 5,
      title: "Reloj Jeans Análogo",
      description:
        "Reloj jeans análogo, para dama, tablero redondo colores rosado y plateado, estilo puntos + arabigo, pulso acero color plateado , Diámetro: 22.70mm , Resistencia al agua: 1 bar",
      img: "https://kevins.com.co/img/productos/7206001111.jpg",
      price: 150000,
      discount: 120000,
      category: "Reloj, fashion", 
    },
    {
      id: 6,
      title: "Reloj Claude Bernard Análogo",
      description:
        "Reloj claude bernard analogo, para hombre, tablero redondo colores blanco y negro, estilo romanos, pulso cuero color negro, calendario , Diámetro: 39.00mm , Resistencia al agua: 3 bares",
      img: "https://kevins.com.co/img/productos/R206000312.jpg",
      price: 753000,
      discount: 454000,
      category: "Reloj, fashion", 
    },
  ];

  return (
    <div className="App">
      
      <header className="App-header">
        <Navbar />
      </header>
      <Cart/>
      <main className="App-main mt-5 pt-5">

        <div className="container">
            <Product/>    
        </div>

        <div className="container">
          <Breadcrumb/>
        </div>
        

        {/* <section>
          <div className="container pt-3">
            <div className="row">
              <div className="col-12">
                <ItemListContainer mensaje="Hola Coders" />
              </div>
            </div>
          </div>
        </section> */}

        <div className="container d-md-flex align-items-stretch">

          <Sidebar/>

          <div id="content" className="p-2 p-md-2 pt-5">
            <section>
              <div className="container">
                <div className="row">
                  
                    {cards.map(({ title, description, img, price, discount }, index) => (
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
                  <Pagination/>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
