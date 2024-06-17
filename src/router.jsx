import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import Root from "./pages/root";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="login" element={<LogIn />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="forgotPassword" element={<ForgotPassword />} />
    </Route>
  )
);

export default router;
