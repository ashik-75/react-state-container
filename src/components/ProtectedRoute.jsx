import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({ children, isAllowed, redirectPath = "/" }) => {
  if (!isAllowed) return <Navigate to={redirectPath} replace />;
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
