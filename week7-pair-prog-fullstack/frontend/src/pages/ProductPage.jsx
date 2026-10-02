import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user ? user.token : null;


  const deleteProduct = async (productId) => {
    try {
      const res = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const onDeleteClick = (productId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirm) return;

    deleteProduct(productId);
    navigate("/");
  };

  return (
    <div className="product-preview">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <h2>{product.name}</h2>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Description: {product.description}</p>
          <button onClick={() => navigate(`/edit-product/${product.id}`)}>Edit</button>
          <button onClick={() => onDeleteClick(product.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default ProductPage;