import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ForgetPass from "./components/ForgetPass";
import { LoginContextProvider } from "../context/loginContext";
import CreatePass from "./components/CreatePass";
import Home from "./page/Home";
import { ProductContextProvider } from "../context/productContext";
import AddProduct from "./components/AddProduct";
import Category from "./components/Category";
import ManageProducts from "./components/ManageProducts";
import Popup from "./components/Popup";
import Customers from "./components/Customers";

function App() {
  return (
    <LoginContextProvider>
      <ProductContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/forgetPassword" exact element={<ForgetPass />} />
            <Route path="/reset-password/:userId/:token" exact element={<CreatePass />} />
            <Route path="/addProduct" exact element={<AddProduct />} />
            <Route path="/manageProducts" exact element={<ManageProducts />} />
            <Route path="/editProduct" exact element={<Popup text="Update Product" />} />
            <Route path="/category" exact element={<Category />} />
            <Route path="/customers" exact element={<Customers />} />
          </Routes>
        </BrowserRouter>
      </ProductContextProvider>
    </LoginContextProvider>
  );
}

export default App;
