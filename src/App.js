import { Route, Routes } from "react-router-dom";
import ROUTES from "./Routes";
import Layout from "./Layout/Layout";
import {
  Home,
  AboutUs,
  ContactUs,
  Products,
  Staff,
  Product,
  Worker,
  NotFound,
} from "./pages/index";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.ABOUTUS} element={<AboutUs />} />
          <Route path={ROUTES.CONTACTUS} element={<ContactUs />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path={ROUTES.STAFF} element={<Staff />} />
          <Route path={ROUTES.PRODUCT} element={<Product />} />
          <Route path={ROUTES.WORKER} element={<Worker />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
