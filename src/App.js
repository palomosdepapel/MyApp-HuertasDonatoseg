import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import "./components/Navbar/Navbar.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./components/ItemListContainer/ItemListContainer.css";
import Footer from "./components/Footer/Footer";
import "./components/Footer/Footer.css";

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

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="App-main mt-5 pt-5">
        <div className="container pt-3">
          <div className="row">
            <div className="col-12">
              <ItemListContainer mensaje="Hola Coders" />
            </div>
          </div>
        </div>
        <section className="py-5">
          <div className="container-lg">
            <div className="row justify-content-center">
              <div className="col-4 shadow-sm p-3 mb-5 bg-body rounded">
                <h1 className="py-3 text-center">Ingrese</h1>
                <form>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      <div id="emailHelp" className="form-text">Ingrese el email que suministró al momento de regiatrarse</div>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                      <label className="form-check-label" for="exampleCheck1">Recordar</label>
                      <a className="float-end" href="index.html">¿Olvidó su contraseña?</a>
                  </div>
                  <button type="submit" className="btn btn-primary">Ingresar</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container-lg">
            <div className="row justify-content-center">
              <div className="col-4 shadow-sm p-3 mb-5 bg-body rounded">
                <h1 className="py-3 text-center">Regístrese</h1>
                <form>
                <div className="mb-3">
                    <label for="exampleInputName2" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="exampleInputName2"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputLastName2" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="exampleInputLastName2"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail2" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail2"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword2" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword2"/>
                  </div>
                  <div className="mb-3 form-check">
                    <a className="float-start" href="index.html">Ya tengo una cuenta</a>
                  </div>
                  <button type="submit" className="btn btn-primary">Crear cuenta</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
