import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Un componente que representa un solo producto
export default function ProductsCart({prod}) {
    return (
        <div>
            <h1 className='title-cart'>Cart</h1>
            {prod 
                ? prod.map((p) => {
                    return (
                        <h3>{p}</h3>
                    )

            }) : ""}

        </div>
    );
}