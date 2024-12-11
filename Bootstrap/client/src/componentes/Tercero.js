import React, { useState, useEffect } from "react";
// Se importan aquellas etiquetas para que bootstrap-react lo entienda.
import { Button, Nav, Form, Container } from 'react-bootstrap';


function Tercero() {

    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [info, setInfo] = useState("");

    useEffect(() => {
        if (nombre !== "") {
            console.log(`${nombre}`)
        }
    }, [nombre]);

    useEffect(() => {
        if (edad !== "") {
            console.log(edad);
        }
    }, [edad]);

    useEffect(() => {
        console.log("Carga la página");
    }, []);

    const enviar = () => {
        console.log(`Su nombre es ${nombre} y tienes ${edad}`);
        setInfo([nombre, edad]);
    }

    return (
        <Container fluid="md">
            <Button variant="info">
                <Nav.Link href="/">Volver</Nav.Link>{' '}
            </Button>

            <br />
            <br />
            <br />
            <br />

            {/* He copiado el formato de un formulario y he ido adaptando a la estructura que tenía antes con esta. */}
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" className="nombre" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your name with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Edad</Form.Label>
                    <Form.Control type="text" className="edad" placeholder="Edad" onChange={(e) => setEdad(e.target.value)} />
                </Form.Group>

                <Button value="Enviar" className="boton" onClick={() => enviar()} > Enviar </Button>

            </Form>
            {info ? <p> Hola {info[0]}, tienes {info[1]} años</p> : ""}

        </Container>
    )
}

export default Tercero;