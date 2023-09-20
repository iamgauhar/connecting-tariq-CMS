import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ForgetPass from "./components/ForgetPass";
import { LoginContextProvider } from "../context/loginContext";
import CreatePass from "./components/CreatePass";

function App() {
  return (
    <LoginContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/forgetPassword" exact element={<ForgetPass />} />
          <Route path="/createPassword" exact element={<CreatePass />} />
        </Routes>
      </BrowserRouter>
    </LoginContextProvider>
  );
}

export default App;
