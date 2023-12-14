import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {Routes, Route} from "react-router-dom";





function App() {
  return (

<>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<Register />} />
      <Route path="/SignIn" element={<Login />} />
    </Routes>

</>
  );
}

export default App;
