import React from "react";
import { FilterProvider } from "../filter/FilterContext";
import Filter from "../filter/Filter";
import ProductList from "../product_list/ProductList";
import ErrorBoundary from "../filter/ErrorBoundary";
import "./CategoryPage.css";

const CategoryPage: React.FC = () => {
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

export default CategoryPage;
