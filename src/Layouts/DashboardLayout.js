import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext/AuthProvider";
import { useAdmin } from "../hooks/useAdmin";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <NavBar></NavBar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 bg-slate-50 mt-1 w-80  text-base-content">
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/addproduct">Add Product</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allsellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/dashboard/myproduct">My Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
