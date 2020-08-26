import React, { Fragment } from 'react';
import { Container, Row, Col, Card, ListGroup, CardDeck } from 'react-bootstrap';
import "./Dolar.css";

const Dolar = ({oficial, blue, turista,bolsa}) => {

    if(turista.compra === "No Cotiza"){
        turista.compra = "-"
    }
  
    return ( 
        <Fragment>
            <Container>
                <CardDeck>
                    <Card 
                        bg="success"
                        className="dolarOficial"
                        text="white"
                    >
                        <Card.Header>
                            <h5>{oficial.nombre}</h5>
                        </Card.Header>
                        <Card.Body 
                            bg="success"
                        >
                            <ListGroup variant="flush" className="text-center">
                                <ListGroup.Item>
                                    <Row>
                                        <Col >
                                            <h6>Compra</h6>
                                            <h4>{oficial.compra} </h4>
                                        </Col>
                                        <Col>
                                            <h6>Venta</h6>
                                            <h4>{oficial.venta}</h4>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <span>Variación: {oficial.variacion}</span>
                        </Card.Footer>
                    </Card>
                    <Card 
                        bg="primary"
                        className="dolarOficial"
                        text="white"
                    >
                        <Card.Header>
                            <h5>{blue.nombre}</h5>
                        </Card.Header>
                        <Card.Body 
                            bg="primary"
                        >
                            <ListGroup variant="flush" className="text-center">
                                <ListGroup.Item>
                                    <Row>
                                        <Col >
                                            <h6>Compra</h6>
                                            <h4>{blue.compra} </h4>
                                        </Col>
                                        <Col>
                                            <h6>Venta</h6>
                                            <h4>{blue.venta}</h4>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <span>Variación: {blue.variacion}</span>
                        </Card.Footer>
                    </Card>
                    <Card 
                        bg="warning"
                        className="dolarOficial"
                        text="white"
                    >
                        <Card.Header>
                            <h5>{turista.nombre}</h5>
                        </Card.Header>
                        <Card.Body 
                            bg="warning"
                        >
                            <ListGroup variant="flush" className="text-center">
                                <ListGroup.Item>
                                    <Row>
                                        <Col >
                                            <h6>Compra</h6>
                                            <h4>{turista.compra} </h4>
                                        </Col>
                                        <Col>
                                            <h6>Venta</h6>
                                            <h4>{turista.venta}</h4>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <span>Variación: {turista.variacion}</span>
                        </Card.Footer>
                    </Card>
                    <Card 
                        bg="secondary"
                        className="dolarOficial"
                        text="white"
                    >
                        <Card.Header>
                            <h5>{bolsa.nombre}</h5>
                        </Card.Header>
                        <Card.Body 
                            bg="secondary"
                        >
                            <ListGroup variant="flush" className="text-center">
                                <ListGroup.Item>
                                    <Row>
                                        <Col >
                                            <h6>Compra</h6>
                                            <h4>{bolsa.compra} </h4>
                                        </Col>
                                        <Col>
                                            <h6>Venta</h6>
                                            <h4>{bolsa.venta}</h4>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <span> Variación: {bolsa.variacion}</span>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>
        </Fragment>
     );
}
 
export default Dolar;