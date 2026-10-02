import ProductListing from "./BookListing";

const ProductListings = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductListing key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListings;