import React from "react";
import { FilterProvider } from "./components/filter/FilterContext";
import Filter from "./components/filter/Filter";
import ProductList from "./components/product_list/ProductList";
import ErrorBoundary from "./components/filter/ErrorBoundary";
import "./App.css";

const App: React.FC = () => {
    return (
        <ErrorBoundary>
            <FilterProvider>
                <div className="app">
                    <div className="container">
                        <Filter />
                        <div className="product-section">
                            <ProductList />
                        </div>
                    </div>
                </div>
            </FilterProvider>
        </ErrorBoundary>
    );
};

export default App;
