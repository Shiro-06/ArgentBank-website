import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import User from "./pages/User/User";
import Error from "./pages/Error/Error";
import Transaction from "./pages/transactions";

const App = () => {
  const isAuth = useSelector((state) => state.login.isAuth);
  const PrivateRoute = ({ element }) => {
    return isAuth ? element : <Navigate to="/login" state={{ from: "/" }} />;
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<PrivateRoute element={<User />} />} />
        <Route path="/transactions" element={<PrivateRoute element={<Transaction editing={true} />} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;