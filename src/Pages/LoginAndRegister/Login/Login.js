import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext/AuthProvider";
import google from '../../../images/google.gif'

const Login = () => {
    const {googleLogin} = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const handleLogin = data =>{
        console.log(data)
    }

    const handleGoogle = ()=>{
        googleLogin()
        .then(result=>{
            const user = result.user
            console.log(user)
        })
        .catch(e=>console.log(e))
      }
  return (
    <div className="w-96 my-16 mx-auto p-4 shadow-lg py-8 rounded">
      <h3 className="text-2xl font-bold text-center">Login</h3>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control mb-2">
          <label>Email</label>
          <input className="input input-bordered" {...register("email")} />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input className="input input-bordered" {...register("password")} />
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
