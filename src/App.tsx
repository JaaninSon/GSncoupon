import { BrowserRouter, Route, Routes } from "react-router-dom";
// import MainPage from "./pages/Main/MainPage";
import { FilterProvider } from "./pages/detail/filter/FilterContext";
import Nav from "./pages/Main/Nav";
import CartPage from "./pages/cart/CartPage";

function App() {
    return (
        <BrowserRouter>
            <FilterProvider>
                <Nav />
                <Routes>
                    {/* <Route path="/" element={<MainPage />} /> */}
                    <Route path="/cart" element={<CartPage />} />
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
