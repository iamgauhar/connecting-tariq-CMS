import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ForgetPass from "./components/ForgetPass";
import { LoginContextProvider } from "../context/loginContext";
import CreatePass from "./components/CreatePass";
import Home from "../page/Home";

function App() {
  return (
    <LoginContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/forgetPassword" exact element={<ForgetPass />} />
          <Route path="/reset-password/:userId/:token" exact element={<CreatePass />} />
        </Routes>
      </BrowserRouter>
    </LoginContextProvider>
  );
}

export default App;
