import React from 'react';
import { Button, Nav, Container } from 'react-bootstrap';

const Welcome = () => {
    return (
        <Container fluid= 'md'>
            <Button variant="info">
                <Nav.Link href="/tercero">Tercero</Nav.Link>{' '}
            </Button>
            <Button variant="danger" style={{margin:'10px'}}>
                <Nav.Link href="/bootstrap">Bootstrap</Nav.Link>{' '}
            </Button>
            <Button variant="warning" style={{margin:'10px'}}>
                <Nav.Link href="/SwitchExample">SwitchExample</Nav.Link>{' '}
            </Button>
        </Container>
    )
};

export default Welcome;

