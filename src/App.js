import Nav from "./components/Nav/Nav";
import Title from "./components/Title/Title";
import { Group1, Group2, Group3 } from "./pages/index";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./pages/Routes";

import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={ROUTES.Group1} element={<Group1 />} />
        <Route path={ROUTES.Group2} element={<Group2 />} />
        <Route path={ROUTES.Group3} element={<Group3 />} />
      </Routes>
    </div>
  );
}

export default App;
