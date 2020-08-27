import React, { Fragment, useState, useEffect } from 'react';
import Dolar from './components/Dolar';
import NavBar from './components/NavBar';
import './App.css'

function App() {

  // State tipos de dolar
  const [oficial, actualizarOficial] = useState({
    nombre:'',
    compra:'',
    venta:'',
    variacion:''
  });

  const [blue, actualizarBlue] = useState({
    nombre:'',
    compra:'',
    venta:'',
    variacion:''
  });

  const [turista, actualizarTurista] = useState({
    nombre:'',
    compra:'',
    venta:'',
    variacion:''
  });

  const [bolsa, actualizarBolsa] = useState({
    nombre:'',
    compra:'',
    venta:'',
    variacion:''
  });
  
  // Api dolar
  const consultarAPI = async () => {
    const api = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    const dolares = await api.json();
    actualizarOficial(dolares[0].casa);
    actualizarBlue(dolares[1].casa);
    actualizarTurista(dolares[6].casa);
    actualizarBolsa(dolares[4].casa);
  }

  // Api News
  const url = 'http://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2020-08-26&' +
          'sortBy=popularity&' +
          'apiKey=7dc87c1a282a4cd68740956a1e7bc760';

  const GoogleNews = new Request(url);

  fetch(GoogleNews)
      .then(function(response) {
          console.log(response.json());
      })

  // Cargar dolares
  useEffect( () => {
    consultarAPI();
  }, [])
  
  return (
    <Fragment>
      <NavBar />
      <main id="contenido">
        <Dolar 
          oficial={oficial}
          blue={blue}
          turista={turista} 
          bolsa={bolsa}
        />
      </main>
    </Fragment>
  );
}

export default App;