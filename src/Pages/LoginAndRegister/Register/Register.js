import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext/AuthProvider";
import { useToken } from "../../../hooks/useToken";
import google from "../../../images/google.gif";


const Register = () => {
  const { googleLogin, createUser, updateUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [createdEmail, setCreatedEmail] = useState("");
  const [token] = useToken(createdEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }
  const handleRegister = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        updateProfile(data.name);
        setCreatedEmail(data.email)
        if (user.uid) {
          const user = {
            name: data.name,
            email: data.email,
            role: data.role,
          };

          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("User Created Successfully");
                navigate("/");
              }
            })
            .catch((e) => toast.error(e.message));
        }
      })
      .catch((e) => toast.error(e.message));
  };

  const updateProfile = (name) => {
    updateUser(name)
      .then(() => {})
      .catch((e) => toast.error(e.message));
  };

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        if(user.email){
          setCreatedEmail(user.email)
          navigate("/");
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="my-16">
      <h2 className="text-center text-2xl mb-2">
        Welcome to <span className="text-red-500 font-bold">Car</span>{" "}
        <span className="font-bold">Dealer</span>
      </h2>
      <div className="w-96  mx-auto p-4 shadow-lg py-8 rounded-lg">
        <h3 className="text-2xl font-bold text-center">Register</h3>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control mb-2">
            <label>Name</label>
            <input
              className="input input-bordered"
              {...register("name")}
              required
            />
          </div>
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
          <select
            className="select select-bordered w-full mt-4"
            {...register("role")}
          >
            <option value="User">user</option>
            <option value="Seller">seller</option>
          </select>
          <input value="Register" className="btn w-full mt-5" type="submit" />
        </form>
        <p className="text-sm my-3 text-center">
          <Link className="text-blue-500" to="/login">
            Alredy have an Account?Login
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
    </div>
  );
};

export default Register;
