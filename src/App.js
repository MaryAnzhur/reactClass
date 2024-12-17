import ROUTES from "./Routes";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Registration from "./components/Registration/Registration";
import UserPage from "./components/UserPage/UserPage";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.LOGIN}>
          <Route index element={<SignIn />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.USERPAGE} element={<UserPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
