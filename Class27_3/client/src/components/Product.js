import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Un componente que representa un solo producto
export default function Product({src, up, name, addToCart }) {
    return (
        <Card
            bg="danger"
            style={{ width: '18rem', margin: '10px', textAlign: 'center' }}
            className="card-product"
        >
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title>{up(name)}</Card.Title>
                <Button
                    variant="warning"
                    onClick={() => addToCart(name)}
                > Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}