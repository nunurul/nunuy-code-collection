import { Route, Routes } from "react-router-dom";
import Password from "../pages/password";
import Home from "../pages/home";
import Dropdown from "../pages/dropdown";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/password" element={<Password />} />
      <Route path="/dropdown" element={<Dropdown />} />
    </Routes>
  );
};

export default Routers;
