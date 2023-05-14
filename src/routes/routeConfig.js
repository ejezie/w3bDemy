import { Routes, Route } from "react-router-dom";

// All pages imports
import { Login, Register, Home } from "pages";

// All constants imports
import { LOGIN, REGISTER, HOME } from "./CONSTANTS";

import { ProtectedRoutes, PublicRoutes } from "components/guards";


const RouterConfig = () => {
  return (
    <div>
      <Routes>
        {/* Public routes should be placed in here */}

        <Route path="/" element={<PublicRoutes />}>
          {/* Auth pages */}
          <Route path={LOGIN} element={<Login />} />
          <Route path={REGISTER} element={<Register />} />
          <Route path={HOME} element={<Home />} />
        </Route>

        <Route path="/" element={<ProtectedRoutes />}>
          {/* Protected routes should be placed in here */}
        </Route>

        {/* 404 page */}
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
};
export default RouterConfig;


