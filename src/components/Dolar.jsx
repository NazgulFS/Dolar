import React, { Fragment } from 'react';
import { Container, Row, Col, Card, ListGroup, CardColumns } from 'react-bootstrap';
import "./Dolar.css";

const Dolar = ({oficial, blue, turista}) => {
  
    return ( 
        <Fragment>
            <Container>
            <CardColumns>
                <Card 
                    bg="success"
                    className="dolarOficial"
                    text="white"
                >
                    <Card.Header> <h5>{oficial.nombre}</h5></Card.Header>
                    <Card.Body 
                        bg="success"
                    >
                        <ListGroup variant="flush" className="text-center">
                            <ListGroup.Item>
                                <Row>
                                    <Col >
                                        <h6>Compra</h6>
                                        <h3>{oficial.compra} </h3>
                                    </Col>
                                    <Col>
                                        <h6>Venta</h6>
                                        <h3>{oficial.venta}</h3>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <span>Variación: {oficial.variacion}</span>
                    </Card.Footer>
                </Card>
            </CardColumns>


            <Row>
                <Col>Noticias</Col>
            </Row>
            </Container>
        </Fragment>
     );
}
 
export default Dolar;