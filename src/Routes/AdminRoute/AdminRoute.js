import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import { useAdmin } from "../../hooks/useAdmin";
import Loader from "../../Pages/Shared/Loader/Loader";

const AdminRoute = ({ children }) => {
  const { user, loading,logOut } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email)
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <Loader></Loader>;
  }

  if (user && isAdmin) {
    return children;
  }
  return (logOut(),<Navigate to="/login" state={{ from: location }} replace />);
};

export default AdminRoute;
