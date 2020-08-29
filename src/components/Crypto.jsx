import React, { Fragment } from 'react';
import { Container, ListGroup} from 'react-bootstrap';
import '../styles/crypto.css'

const Crypto = ({crypto}) => {
    return ( 
        <Fragment>
        <h4>CryptoCurrency</h4>
        <Container>
            <h5>Criptomonedas</h5>
            <ListGroup>
            {crypto.slice(12,20).map(coin => (
                <ListGroup.Item key={coin.symbol_id}>
                    {coin.exchange_id}: {coin.price}
                </ListGroup.Item>
            ))}
            </ListGroup>
        </Container>
        </Fragment>
     );
}
    
export default Crypto;