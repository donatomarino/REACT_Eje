// importar React de la biblioteca.
import React from 'react';

//Si se utiliza una etiqueta de React-Bootstrap hay que importarla
import { Button, Nav, Card, Container, Row, Col } from 'react-bootstrap';

//Componente funcional -> 
function Bootstrap(props) {
    return (
        <Container fluid="xl">
            <Button variant="info">
                <Nav.Link href="/"> VOlVER </Nav.Link>{' '}
            </Button>{' '}
            <br />
            <br />
            <br />
            <br />
            <br />
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.arqhys.com/wp-content/uploads/2014/03/que-es-el-color.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/736x/03/9b/d5/039bd595820ff4bdcd8022d68af684e6.jpg " />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB98BsAKvNDFe9ONADiKwd1uxpruyf2wW6Hg&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}
export default Bootstrap;