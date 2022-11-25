import React from "react";

const AddProduct = () => {
  return (
    <div className="m-10 w-96 p-5 shadow-md rounded-md">
      <h2 className="text-3xl text-center font-bold my-5 text-slate-700">Add a Car</h2>
      <form className="">
        <div>
          <label>Email</label>
          <input type="text" className="input input-bordered w-full " />
        </div>
        <div>
          <label>Name</label>
          <input type="text" className="input input-bordered w-full " />
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div>
            <label></label>
            <input type="text" className="input input-bordered w-full " />
          </div>
          <div>
            <label></label>
            <input type="text" className="input input-bordered w-full " />
          </div>
          <div>
            <label></label>
            <input type="text" className="input input-bordered w-full " />
          </div>
          <div>
            <label></label>
            <input type="text" className="input input-bordered w-full " />
          </div>
          <div>
            <label></label>
            <input type="text" className="input input-bordered w-full " />
          </div>
          <div>
            <label></label>
            <input type="text" className="input input-bordered w-full " />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
