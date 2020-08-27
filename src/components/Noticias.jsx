import React, {Fragment} from 'react'
import { Container, CardDeck, Card } from 'react-bootstrap';
import "./noticias.css"


const Noticias = ({noticias}) => {
    return ( 
        <Fragment>
            <Container>
                <CardDeck className="noticias">
                {noticias.slice(0, 4).map(noticia => (
                     <Card>
                        <Card.Img key={noticia.url} variant="top" src={noticia.urlToImage} />
                        <Card.Header key={noticia.url}>
                         <h6  className="titulo-noticia">{noticia.title}</h6>
                        </Card.Header>
                     <Card.Body>
                         <p className="contenido-noticia" key={noticia.url}>{noticia.title}</p>
                         <p className="fuente-noticia" key={noticia.url}> Fuente: {noticia.author}</p>
                     </Card.Body>
                 </Card>
                ))}
                </CardDeck>
            </Container>
        </Fragment>
     );
}
 
export default Noticias;