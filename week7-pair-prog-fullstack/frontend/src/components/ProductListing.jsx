import { Link } from "react-router-dom";
const ProductListing = ({ product }) => {
  return (
    <div className="product-preview">
      <Link to={`/products/${product.id}`}>
        <h2>{product.name}</h2>
      </Link>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductListing;