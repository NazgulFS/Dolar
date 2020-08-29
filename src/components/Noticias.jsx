import React, {Fragment} from 'react'
import { Container, CardColumns, Card} from 'react-bootstrap';
import "../styles/Noticias.css";


const Noticias = ({ noticias }) => {
    return (
        <Fragment>
            <Container>
            <h5 className="header">NOTICIAS</h5>
                <CardColumns className="noticias">
                    {noticias.slice(0, 6).map(noticia => (
                        <Card  key={noticia.url}>
                            <Card.Img variant="top" src={noticia.urlToImage} />
                            <Card.Body>
                            <h6 className="titulo-noticia"><a href={noticia.url} target="_blank" rel="noopener noreferrer">{noticia.title}</a></h6>
                            <p className="fuente-noticia"> Fuente: {noticia.author}</p>
                            </Card.Body>
                        </Card>
                    ))}
                </CardColumns>
            </Container>
        </Fragment>
    );
}
 
export default Noticias;