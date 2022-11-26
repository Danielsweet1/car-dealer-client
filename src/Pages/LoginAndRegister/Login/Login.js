import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext/AuthProvider";
import { useToken } from "../../../hooks/useToken";
import google from "../../../images/google.gif";


const Login = () => {
  const { googleLogin, logIn } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [createdEmail, setCreatedEmail] = useState("");
  const [token] = useToken(createdEmail);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    logIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        if (user.email) {
          toast.success("Login successful");
          setCreatedEmail(user.email);
        }
      })
      .catch((e) => toast.error(e.message));
  };

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        if (user.email) {
          setCreatedEmail(user.email);
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="w-96 my-16 mx-auto p-4 shadow-lg py-8 rounded-lg">
      <h3 className="text-2xl font-bold text-center">Login</h3>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control mb-2">
          <label>Email</label>
          <input
            type="email"
            className="input input-bordered"
            {...register("email")}
            required
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            className="input input-bordered"
            {...register("password")}
            required
          />
        </div>
        <input value="Login" className="btn w-full mt-5" type="submit" />
      </form>
      <p className="text-sm my-3 text-center">
        <Link className="text-blue-500" to="/register">
          Create New Account
        </Link>
      </p>
      <div className="w-full">
        <img
          onClick={handleGoogle}
          className=" h-16 mx-auto border hover:cursor-pointer"
          src={google}
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
