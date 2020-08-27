import React, { Fragment } from 'react';
import { Container, Card, CardDeck } from 'react-bootstrap';
import "./Noticias.css";

const Noticias = (noticias) => {

    console.log(noticias.noticias.articles)

    return ( 
        <Container>
            <CardDeck id="noticiasDOM">
                <ul>
                {noticias.noticias.articles.map((articles) => {
                    return(
                        <li>{articles.author}</li>
                    )
                })}
                </ul>
            </CardDeck>
        </Container>
     );
}
 
export default Noticias;