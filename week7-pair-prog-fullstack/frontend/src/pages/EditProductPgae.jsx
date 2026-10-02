import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProductPage = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [inventoryCount, setInventoryCount] = useState("");
  const [supplier, setSupplier] = useState("");
  const [name, setName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [isVerified, setIsVerified] = useState("true");

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user ? user.token : null;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProductName(data.name);
        setCategory(data.category);
        setDescription(data.description);
        setPrice(data.price);
        setInventoryCount(data.inventoryCount);
        setSupplier(data.supplier);
        setName(data.supplier.name);
        setContactEmail(data.supplier.contactEmail);
        setContactPhone(data.supplier.contactPhone);
        setIsVerified(data.isVerified ? "true" : "false");
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const updateProduct = async (product) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(product),
      });
      if (!res.ok) {
        throw new Error("Failed to update product");
      }
    } catch (error) {
      console.error(error);
      return false;
    }
    return true;
  };

  const submitForm = (e) => {
    e.preventDefault();

    const updatedProduct = {
      name: productName,
      category,
      description,
      price,
      inventoryCount,
      supplier,
      supplier: {
        name,
        contactEmail,
        contactPhone,
      },
      isVerified: isVerified === "true",
    };

    updateProduct(updatedProduct);
    return navigate(`/products/${id}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="create">
      <h2>Update Product</h2>
      <form onSubmit={submitForm}>
        <label>Product Name:</label>
        <input
          type="text"
          required
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label>Category:</label>
        <input
          type="text"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Price:</label>
        <input
          type="number"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Inventory Count:</label>
        <input
          type="number"
          required
          value={inventoryCount}
          onChange={(e) => setInventoryCount(e.target.value)}
        />
        <label>Supplier:</label>
        <input
          type="text"
          required
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
        />
        <label>Supplier Info:</label>
        <input
          type="text"
          required
          value={supplier.name}
          onChange={(e) => setSupplier({ ...supplier, name: e.target.value })}
        />
        <label>Contact Email:</label>
        <input
          type="email"
          required
          value={supplier.contactEmail}
          onChange={(e) => setSupplier({ ...supplier, contactEmail: e.target.value })}
        />
        <label>Contact Phone:</label>
        <input
          type="tel"
          value={supplier.contactPhone}
          onChange={(e) => setSupplier({ ...supplier, contactPhone: e.target.value })}
        />
        <label>Verified:</label>
        <select value={isVerified} onChange={(e) => setIsVerified(e.target.value)}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <button>Update Product</button>
      </form>
    </div>
  );
};

export default EditProductPage;