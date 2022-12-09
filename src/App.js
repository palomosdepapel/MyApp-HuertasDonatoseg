import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import "./components/Navbar/Navbar.css";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./components/ItemListContainer/ItemListContainer.css";
import Footer from "./components/Footer/Footer";
import "./components/Footer/Footer.css";
import Card from "./components/Card/Card";
import Cart from "./components/Cart/Cart";

function App() {
  //let edad = 18

  // if(edad > 18) {
  //   console.log('eres mayor de edad')
  // }else if (edad === 18){
  //   console.log('justo tenes 18')
  // }else {
  //   console.log('eres menor de edad')
  // }

  // edad > 18 ? console.log('eres mayor') : edad === 18 ? console.log('justo tenes 18') : console.log('sos menor')

  // let edadPersona = 20

  //let edadFinal =  edadPersona !== null ? edadPersona : 17
  // let edadFinal =  edadPersona || 17

  // // true || false => true
  // // true || true  => true
  // // false || true => true
  // // false || false => false
  //console.log(edadFinal)

  // let text = ""
  // let nombre = ""

  // let finalText = ` Esto es lo que se va a imprimir ${texto} de lo cual el auto es ${nombre}`
  // let finalText = " Esto es lo que se va a imprimir " + texto + " de lo cual el auto es " + nombre

  // let manzanas = 10
  // let manzanasAgregadas = 5

  // // let finalText = "Jorege tenia " + manzanas + " pero Luis le agrego " + manzanasAgregadas + "y ahora tiene un total de" + manzanas + manzanasAgregadas

  // let finalText = ` Jorge tenia ${manzanas} manzanas y luis le agrego ${manzanasAgregadas} manzanas y ahora tiene ${(manzanas + manzanasAgregadas)}`
  // console.log(finalText)

  // //console.log( text + "juampi") => hola coder soy juampi

  // let jugadorDeFutbol = {

  //   name:"Lionel",
  //   apellido:"Messi",
  //   soltero : false ,
  //   hijos : ["Thiago","Mateo","Ciro"]
  // }

  // const {soltero,hijos:[,,c],name,apellido} = jugadorDeFutbol

  // console.log(c)

  // const arr = [1,2,3,4]

  // const resultado = arr.includes(-1)

  // console.log(resultado)

  // forEeach  =>  recorre
  // map   =>  podes modificar cosas y retorna una nueva array
  // find  => te devuelve el tipo de dato que encuentra y si no un objeto vacio
  // filter  => reduce un array  y filtra , la respuesta esta en un arr  en el caso contrario []
  // indexOf => 1 -1
  // every  => booleano
  // some  => booleano
  // reduce  =>

  //let nombre = "Hovhannes"

  //let styles = {
  //  color:'white',
  //  backgroundColor:'blue'
  //}

  const cards = [
    {
      title: "Reloj Guess Análogo",
      description:
        "Reloj guess análogo, para hombre, tablero redondo colores azul y rosa, estilo index + arabigo, pulso silicona color azul, calendario , Diámetro: 44.00mm , Resistencia al agua: 10 bares",
      img: "https://kevins.com.co/img/productos/6R06810172.jpg",
      price: 1076000,
      discount: 1950000,
      category: "Reloj, hombre", 
    },
    {
      title: "Reloj Edox Análogo",
      description:
        "Reloj Edox analogo, para dama, tablero redondo colores blanco y rosa, estilo index + arabigo, pulso silicona color blanco, calendario, cronografo , Diámetro: 38.00mm , Resistencia al agua: 30 bares",
      img: "https://kevins.com.co/img/productos/2R06000141.jpg",
      price: 4509000,
      discount: 4800000,
      category: "Reloj, mujer", 
    },
  ];

  return (
    <div className="App">
      
      <header className="App-header">
        <Navbar />
      </header>
      
      <main className="App-main mt-5 pt-5">

        <Cart/>
        
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
          <nav id="sidebar" className="me-3">
            <div className="mb-3">
              <p className="py-3"><strong>12 productos encontrados</strong></p>
            </div>
            <div className="mb-3">
              <p>Ordenar por:</p>
              <select className="form-select form-select-sm" aria-label="Default select example">
                <option value="1">Cualquier precio</option>
                <option value="2">Menor precio</option>
                <option value="3">Mayor precio</option>
              </select>
            </div>
            <div className="mb-3">
              <h5 className="py-3">Marca</h5>
              <div className="tagcloud">
                <a href="index.html" className="tag-cloud-link">Citizen</a>
                <a href="index.html" className="tag-cloud-link">Claude Bernal</a>
                <a href="index.html" className="tag-cloud-link">Diesel</a>
              </div>
            </div>
            <div className="mb-3">
              <h5 className="py-3">Género</h5>
              <div className="tagcloud">
                <a href="index.html" className="tag-cloud-link">Hombre</a>
                <a href="index.html" className="tag-cloud-link">Mujer</a>
                <a href="index.html" className="tag-cloud-link">Niño</a>
              </div>
            </div>
            <div className="mb-3">
              <h5 className="py-3">Funcionalidad</h5>
              <div className="tagcloud">
                <a href="index.html" className="tag-cloud-link">Análogo</a>
                <a href="index.html" className="tag-cloud-link">Digital</a>
                <a href="index.html" className="tag-cloud-link">Análogo y digital</a>
              </div>
            </div>
            <div className="mb-3">
              <h5 className="py-3">Material</h5>
              <div className="tagcloud">
                <a href="index.html" className="tag-cloud-link">Acero</a>
                <a href="index.html" className="tag-cloud-link">Cuero</a>
                <a href="index.html" className="tag-cloud-link">Cuero sintético</a>
              </div>
            </div>
          </nav>
          <div id="content" className="p-4 p-md-5 pt-5">
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
