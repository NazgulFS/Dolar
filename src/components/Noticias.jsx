import React, {Fragment,useState, useEffect} from 'react'
import { Container, CardDeck, Card } from 'react-bootstrap';

const Noticias = ({noticias}) => {

    
    return ( 
        <Fragment>
            <Container>
                <CardDeck>
                {noticias.slice(0, 4).map(noticia => (
                     <Card>
                        <Card.Img variant="top" src="{noticia.urlToImage}" />
                     {/* <Card.Header>
                         <h6>{noticia.title}</h6>
                     </Card.Header> */}
                     <Card.Body>
                         <p>{noticia.title}</p>
                     </Card.Body>
                     <Card.Footer className="text-center">
                         <span> Fuente: {noticia.author}</span>
                     </Card.Footer>
                 </Card>
                ))}
                </CardDeck>
            </Container>
        </Fragment>
     );
}
 
export default Noticias;