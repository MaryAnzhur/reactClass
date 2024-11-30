import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import { Home, Products, ContactUs } from "./pages";
import { Route, Routes } from "react-router-dom";
import ROUTES from './Routes'

import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={ROUTES.HOME}>
          <Route index element={<Home />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path={ROUTES.CONTACT} element={<ContactUs />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
