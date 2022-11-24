import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext/AuthProvider";

const NavBar = () => {
  const { user,logOut } = useContext(AuthContext);

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">My Orders</Link>
      </li>
      {user?.email ? (
        <li>
          <button onClick={logOut}>Logout</button>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar flex justify-around shadow-md py-3">
        <div className="navbar-start ">
          <div className="dropdown mr-5">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu font-bold menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link className="font-bold" to="/">
            <span className="text-3xl text-red-500">Car</span>{" "}
            <span className="text-2xl">Dealer</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-bold menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
