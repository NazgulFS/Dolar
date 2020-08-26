import React, { Fragment } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const Dolar = ({oficial, blue, turista}) => {
  
    return ( 
        <Fragment>
            <Container>
            <Row>
                <Col>
                    <Row>
                        <Card 
                            className="dolarOficial"
                            style={{ width: '18rem' }}
                        >
                        <Card.Header>{oficial.nombre}</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item><Row><Col><p>Compra</p>{oficial.compra}</Col><Col><p>Ventanpm</p>{oficial.venta}</Col></Row></ListGroup.Item>
                            <ListGroup.Item>{oficial.variacion}</ListGroup.Item>
                        </ListGroup>
                        </Card>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Card 
                            className="dolarBlue"
                            style={{ width: '18rem' }}>
                        <Card.Header>{blue.nombre}</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item><Row><Col><p>Compra</p>{blue.compra}</Col><Col><p>Venta</p>{blue.venta}</Col></Row></ListGroup.Item>
                            <ListGroup.Item>{blue.variacion}</ListGroup.Item>
                        </ListGroup>
                        </Card>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Card
                            className="dolarTurista"
                            style={{ width: '18rem' }}>
                        <Card.Header>{turista.nombre}</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item><Row><Col><p>Compra</p>{turista.compra}</Col><Col><p>Venta</p>{turista.venta}</Col></Row></ListGroup.Item>
                            <ListGroup.Item>{turista.variacion}</ListGroup.Item>
                        </ListGroup>
                        </Card>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>Noticias</Col>
            </Row>
            </Container>
        </Fragment>
     );
}
 
export default Dolar;