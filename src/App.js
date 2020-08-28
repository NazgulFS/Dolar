import React, { Fragment, useState, useEffect } from 'react';
import Dolar from './components/Dolar';
import NavBar from './components/NavBar';
import Noticias from './components/Noticias';
import Cripto from './components/Cripto';
import { Container } from "react-bootstrap";
import './App.css'

function App() {

  // State Noticias
  const [noticias, guardarNoticias] = useState([]);

  // State tipos de dolar
  const [oficial, actualizarOficial] = useState({
 
  });

  const [blue, actualizarBlue] = useState({

  });

  const [turista, actualizarTurista] = useState({

  });

  const [bolsa, actualizarBolsa] = useState({

  });
  
  // API dolar
  const consultarAPI = async () => {
    const api = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    const dolares = await api.json();

    actualizarOficial(dolares[0].casa);
    actualizarBlue(dolares[1].casa);
    actualizarTurista(dolares[6].casa);
    actualizarBolsa(dolares[4].casa);
  }

  // API Noticias
  const consultarNoticias = async () => {
    let url = 'http://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=7dc87c1a282a4cd68740956a1e7bc760'

    const res = await fetch(url)
    const noticias = await res.json();
    guardarNoticias(noticias.articles);
}

  // API Cripto
  const consultarCripto = async () => {
    
  }

  useEffect( () => {
    consultarAPI();
    consultarNoticias();
    consultarCripto();
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
      </Container>
    </Fragment>
  );
}

export default App;