import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import google from "../../../images/google.gif";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const handleRegister = (data) => {
    console.log(data);
  };
  return (
    <div className="my-16">
        <h2 className="text-center text-2xl mb-2">Welcome to <span className="text-red-500 font-bold">Car</span> <span className="font-bold">Dealer</span></h2>
      <div className="w-96  mx-auto p-4 shadow-lg py-8 rounded">
        <h3 className="text-2xl font-bold text-center">Register</h3>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control mb-2">
            <label>Name</label>
            <input className="input input-bordered" {...register("name")} />
          </div>
          <div className="form-control mb-2">
            <label>Email</label>
            <input className="input input-bordered" {...register("email")} />
          </div>
          <div className="form-control">
            <label>Password</label>
            <input className="input input-bordered" {...register("password")} />
          </div>
          <input value="Register" className="btn w-full mt-5" type="submit" />
        </form>
        <p className="text-sm my-3 text-center">
          <Link className="text-blue-500" to="/login">
            Alredy have an Account?Login
          </Link>
        </p>
        <div className="w-full">
          <img
            className=" h-16 mx-auto border hover:cursor-pointer"
            src={google}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Register;