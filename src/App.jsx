import Products from "./components/Products/Products";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./Routes";
import EachProduct from "./components/EachProduct/EachProduct";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.PRODUCTS}>
          <Route index element={<Products />} />
          <Route element={<EachProduct />} path={ROUTES.EACH} /> 
        </Route>
      </Routes>
      {/* <Products /> */}
    </div>
  );
}

export default App;
