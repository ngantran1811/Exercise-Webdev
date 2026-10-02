import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import AddProductPage from "./pages/AddProductPage";
import Home from "./pages/Home.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EditProductPage from "./pages/EditProductPage.jsx";


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user && user.token ? true : false;
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar 
         isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products/:id"
              element={<ProductPage isAuthenticated={isAuthenticated} />}
             />
            <Route path="/add-product" element={ isAuthenticated ? <AddProductPage /> : <Navigate to="/signup" />
              }
            />
            <Route path="/edit-product/:id" element={ isAuthenticated ? <EditProductPage /> : <Navigate to="/signup" />
              }
            />
            <Route path="/signup" element={isAuthenticated ? (
                  <Navigate to="/" />
                ) : (
                  <Signup setIsAuthenticated={setIsAuthenticated} />
                )
              } />
            <Route path="/login" element={isAuthenticated ? (
                  <Navigate to="/" />
                ) : (
                  <Login setIsAuthenticated={setIsAuthenticated} />
                )
              } />

            <Route path="*" element={<NotFoundPage />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
