import { useSelector } from "react-redux";
import { HOME } from "../../routes/CONSTANTS";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
//   const { isAuthenticated } = useSelector((state) => state.auth);
  return false ? <Navigate to={HOME} replace /> : <Outlet />;
};

export default PublicRoutes;
