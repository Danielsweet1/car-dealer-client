import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext/AuthProvider";

const AddProduct = () => {
    const {user} = useContext(AuthContext)
  return (
    <div className="m-10 w-96 p-5 shadow-md rounded-md">
      <h2 className="text-3xl text-center font-bold my-5 text-slate-700">Add a Car</h2>
      <form className="">
        <div>
          <label>Email</label>
          <input name="sellerName" defaultValue={user.email} disabled type="text" className="input input-bordered w-full " />
        </div>
        <div>
          <label>Name</label>
          <input defaultValue={user.displayName} disabled type="text" className="input input-bordered w-full " />
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div>
            <label>Brand</label>
            <input type="text" className="input input-bordered w-full " />
          </div>
          <div>
            <label>Model Name</label>
            <input type="text" className="input input-bordered w-full " />
          </div>
          <div>
            <label>Original Price</label>
            <input type="text" className="input input-bordered w-full " />
          </div>
          <div>
            <label>Resale Price</label>
            <input type="text" className="input input-bordered w-full " />
          </div>
          <div>
            <label>Location</label>
            <input type="text" className="input input-bordered w-full " />
          </div>
          <div>
            <label>Years of Use</label>
            <input type="text" className="input input-bordered w-full " />
          </div>
        </div>
        <div className="mt-3">
            <label>Car Photo</label>
            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />    
        </div>
        <input type="submit" value="Add Car"  className="btn w-full my-5"/>
      </form>
    </div>
  );
};

export default AddProduct;
