import React from "react";
import { FilterProvider } from "./pages/detail/filter/FilterContext";
import Filter from "./pages/detail/filter/Filter";
import ProductList from "./pages/detail/product_list/ProductList";
import ErrorBoundary from "./pages/detail/filter/ErrorBoundary";
import "./App.css";
import CartPage from "./pages/cart/CartPage";

const App: React.FC = () => {
    return (
        <ErrorBoundary>
            <FilterProvider>
                <div className="app">
                    <div className="container">
                        {/* <Filter />
                        <div className="product-section">
                            <ProductList />
                        </div> */}
                        <CartPage />
                    </div>
                </div>
            </FilterProvider>
        </ErrorBoundary>
    );
};

export default App;
