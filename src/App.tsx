import { BrowserRouter, Route, Routes } from "react-router-dom";
// import MainPage from "./pages/Main/MainPage";
import { FilterProvider } from "./pages/detail/filter/FilterContext";
import Nav from "./pages/Main/Nav";

function App() {
    return (
        <BrowserRouter>
            <FilterProvider>
                <Nav />
                <Routes>{/* <Route path="/" element={<MainPage />} /> */}</Routes>
            </FilterProvider>
        </BrowserRouter>
    );
}

export default App;
