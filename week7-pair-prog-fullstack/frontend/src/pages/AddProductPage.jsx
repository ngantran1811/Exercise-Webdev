import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProductPage = () => {
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


  const navigate = useNavigate();
  const addProduct = async (newProduct) => {
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newProduct),
      });
      if (!res.ok) {
        throw new Error("Failed to add product");
      }
    } catch (error) {
      console.error(error);
      return false;
    }
    return true;
  };

  const submitForm = (e) => {
    e.preventDefault();

    const newProduct = {
     productName, 
    category,
    description,
    price,
    inventoryCount,
    supplier: {
      name,
      contactEmail,
      contactPhone,
      isVerified: isVerified === "true",
      },
    };

    addProduct(newProduct);
    console.log(newProduct);

    return navigate("/");
  };

  return (
    <div className="create">
      <h2>Add a New Product</h2>
      <form onSubmit={submitForm}>
        <label>Product Name:</label>
        <input
          type="text"
          required
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label>Category</label>
        <input
          type="text"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label>Description</label>
        <textarea
          type="text"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Price</label>
        <input
          type="number"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>InventoryCount</label>
        <input
          type="number"
          required
          value={inventoryCount}
          onChange={(e) => setInventoryCount(e.target.value)}
        />
        <label>Supplier</label>
        <input
          type="text"
          required
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
        />
        <label>name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Contact email</label>
        <input
          type="text"
          required
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
        />
        <label>contactPhone</label>
        <input
          type="text"
          required
          value={contactPhone}
          onChange={(e) => setContactPhone(e.target.value)}
        />
    
        <label>Verified:</label>
        <select value={isVerified} onChange={(e) => setIsVerified(e.target.value)}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <button>Add Product</button>
      </form>
    </div>
  );
};

export default AddProductPage;
