import React, { Fragment, useState, useEffect } from 'react';
import Dolar from './components/Dolar';
import NavBar from './components/NavBar';
import Noticias from './components/Noticias';
import Crypto  from './components/Crypto'
import { Container } from "react-bootstrap";
import './App.css'

function App() {

  // State Noticias
  const [noticias, guardarNoticias] = useState([]);

  // State Crypto
  const [crypto, guardarCrypto] = useState([]);

  // State tipos de dolar
  const [oficial, actualizarOficial] = useState({});
  const [blue, actualizarBlue] = useState({});
  const [turista, actualizarTurista] = useState({});
  const [bolsa, actualizarBolsa] = useState({});
  
  // API DOLAR
  const consultarAPI = async () => {
    const api = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    const dolares = await api.json();

    actualizarOficial(dolares[0].casa);
    actualizarBlue(dolares[1].casa);
    actualizarTurista(dolares[6].casa);
    actualizarBolsa(dolares[4].casa);
  }

  // API NOTICIAS
  const consultarNoticias = async () => {
    let url = 'http://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=7dc87c1a282a4cd68740956a1e7bc760'
    const res = await fetch(url)
    const noticias = await res.json();
    guardarNoticias(noticias.articles);
}

  // API CRYPTO
  const consultarCrypto = async () => {
    let url = 'https://rest.coinapi.io/v1/symbols';
    const cryp = await fetch(url,{
      "headers": {'X-CoinAPI-Key': '8762B3D4-0BD0-4E75-B619-51D59763938D'}
    });
    const crypto = await cryp.json();
    guardarCrypto(crypto);
    console.log(crypto)
  }

  useEffect( () => {
    consultarAPI();
    consultarNoticias();
    consultarCrypto();
  }, [])
  
  return (
    <Fragment>
      <NavBar />
      <Container>
        <Dolar 
          oficial={oficial}
          blue={blue}
          turista={turista} 
          bolsa={bolsa}
        />
        <Noticias 
          noticias={noticias}
        />
        <Crypto 
          crypto={crypto}
        />
      </Container>
    </Fragment>
  );
}

export default App;