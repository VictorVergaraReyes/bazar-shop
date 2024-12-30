import { Link } from 'react-router-dom';

interface productProps {
    id: number
}

export const Product = ({id}: productProps) => {
    return (
        <Link to={`/product/:${id}`} style={{ textDecoration: 'none' }}>
            <h1>Product</h1>

        </Link>
    )
}