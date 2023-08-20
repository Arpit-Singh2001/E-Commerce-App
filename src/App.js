import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Categories from "./pages/categories/Categories";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId?" element={<Categories />} />
          <Route path="/products/:ProductId" element={<ProductDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
