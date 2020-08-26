import React, { Fragment, useState, useEffect } from 'react';
import Dolar from './components/Dolar'
import './App.css'

function App() {

  // State de dolar
  const [dolares, guardarDolar] = useState([]);

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
  
  const consultarAPI = async () => {
    const api = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    const dolares = await api.json();
    guardarDolar(dolares);
    actualizarOficial(dolares[0].casa);
    actualizarBlue(dolares[1].casa);
    actualizarTurista(dolares[6].casa);
  }

  // Cargar dolares
  useEffect( () => {
    consultarAPI();
  }, [])
  
  return (
    <Fragment>
      <main id="contenido">
        <Dolar 
          oficial={oficial}
          blue={blue}
          turista={turista} 
        />
      </main>
    </Fragment>
  );
}

export default App;