import { BrowserRouter, Route, Routes } from "react-router-dom";
// import MainPage from "./pages/Main/MainPage";
import { FilterProvider } from "./pages/detail/filter/FilterContext";
import Nav from "./pages/Main/components/common/Nav";
import CartPage from "./pages/cart/CartPage";
import DetailPage from "./pages/detail/product_detail/DetailPage";
import CategoryPage from "./pages/detail/category/CategoryPage";

function App() {
    return (
        <BrowserRouter>
            <FilterProvider>
                <Nav />
                <Routes>
                    {/* <Route path="/" element={<MainPage />} /> */}
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/detail/product_detail/:productId" element={<DetailPage />} />
                    <Route path="/detail/category" element={<CategoryPage />} />

                    {/* <div className="app">
                    <div className="container">
                        <Filter />
                        <div className="product-section">
                            <ProductList />
                        </div>
                    </div>
                </div> */}
                </Routes>
            </FilterProvider>
        </BrowserRouter>
    );
}

export default App;
