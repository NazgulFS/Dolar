import React, {Fragment} from 'react'
import { Container, CardDeck, Card } from 'react-bootstrap';
import "./noticias.css";


const Noticias = ({ noticias }) => {
    return (
        <Fragment>
            <Container>
                <CardDeck className="noticias">
                    {noticias.slice(0, 4).map(noticia => (
                        <Card  key={noticia.url}>
                            <Card.Img variant="top" src={noticia.urlToImage} />
                            <Card.Header>
                                <h6 className="titulo-noticia">{noticia.title}</h6>
                            </Card.Header>
                            <Card.Body>
                                <p className="contenido-noticia">{noticia.content}</p>
                                <p className="fuente-noticia"> Fuente: {noticia.author}</p>
                            </Card.Body>
                        </Card>
                    ))}
                </CardDeck>
            </Container>
        </Fragment>
    );
}
 
export default Noticias;