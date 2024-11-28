import Nav from "./components/Nav/Nav";
import { Home, Group1, Group2, Group3, NotFound } from "./pages/index";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./pages/Routes";

import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={ROUTES.Home}>
        <Route index element={<Home />}/>
        <Route path={ROUTES.Group1} element={<Group1 />} />
        <Route path={ROUTES.Group2} element={<Group2 />} />
        <Route path={ROUTES.Group3} element={<Group3 />} />
        <Route path={ROUTES.NotFound} element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
