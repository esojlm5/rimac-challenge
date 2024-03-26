import { useContext } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "@/layouts";
import Home from "@/pages/home";
import Customization from "@/pages/customization";
import Resume from "@/pages/resume";
import AppContext from "@/util/context";

const AppRouter = () => {
  const { data } = useContext(AppContext);
  console.log(data);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/planes"
            element={
              data.user ? <Customization /> : <Navigate replace to="/" />
            }
          />
          <Route
            path="/resumen"
            element={
              data.user && data.plan ? <Resume /> : <Navigate replace to="/" />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

