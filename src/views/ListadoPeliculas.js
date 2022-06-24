
import '../App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import { useEffect, useState } from 'react';

function ListadoPeliculas() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const TOTAL_POR_PAGINA = 4;

  useEffect(()=>{
    buscarPeliculas();
  }, [])


  const buscarPeliculas = async () => {
    let url = "https://corsanywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json";


    // fetch(url, {
    //   "method":"GET",
    //   "headers":{
    //     "Accept":"application/json",
    //     "Content-Type":"application/json"
    //   }
    // }).then(result => {
      
    // })

    let result = await  fetch(url, {
          "method":"GET",
        
          "headers":{
            "Accept":"application/json",
            "Content-Type":"application/json",
            "Origin":"https://lucasmoy.dev/",
            "Access-Control-Allow-Origin" : "*", 
"Access-Control-Allow-Credentials" : true 
          }
        })

    let json = await result.json();

    setPeliculas(json);

  }


  const cargarPeliculas = () => {
  }

  const getTotalPaginas = () => {
    let cantidadTotal = peliculas.length;
    return Math.ceil(cantidadTotal/TOTAL_POR_PAGINA);
     
  }


  let peliculasPorPagina = peliculas.slice((paginaActual-1) * TOTAL_POR_PAGINA, paginaActual * TOTAL_POR_PAGINA);


  return (
    <PageWrapper>
            {
              peliculasPorPagina.map(pelicula => 
                             
                <Pelicula  titulo={pelicula.titulo} calificacion={pelicula.calificacion}
                  director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion}
                  img={pelicula.img}
                >
                  {pelicula.description}
                </Pelicula>
              )
            }

            <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina)=>{
              setPaginaActual(pagina);
            }}>

            </Paginacion>
    </PageWrapper>
  )
}

export default ListadoPeliculas;
