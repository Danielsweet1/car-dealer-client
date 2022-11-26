import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext/AuthProvider";
import UseTitle from "../../../utilities/UseTitle";

const AddProduct = () => {
  UseTitle('Add Product')
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()

  const handleAddProduct = (data) => {
    const image = data.image[0];

    const imgbbKey = process.env.REACT_APP_IMGBB_KEY;

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const carInfo = {
            seller_name: user?.displayName,
            email: user?.email,
            brand: data.brand,
            model: data.model,
            phone: data.phone,
            original_price: data.originalPrice,
            resale_price: data.resalePrice,
            location: data.location,
            years_of_use: data.used,
            condition: data.condition,
            image_url: imgData.data.url,
            verified: false,
            details: data.description,
          };

          fetch("http://localhost:5000/cars", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(carInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Car added Successfully");
                navigate('/dashboard/myproduct')
              }
            });
        }
      });
  };
  return (
    <div className=" w-96 p-5 shadow-md mx-auto rounded-md">
      <h2 className="text-3xl text-center font-bold my-5 text-slate-700">
        Add a Car
      </h2>
      <form onSubmit={handleSubmit(handleAddProduct)} className="">
        <div>
          <label>Brand</label>
          <input
            {...register("brand")}
            type="text"
            className="input input-bordered w-full "
            required
          />
        </div>
        <div>
          <label>Model Name</label>
          <input
            {...register("model")}
            type="text"
            className="input input-bordered w-full "
            required
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            {...register("phone")}
            type="text"
            className="input input-bordered w-full "
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div>
            <label>Original Price</label>
            <input
              {...register("originalPrice")}
              type="text"
              className="input input-bordered w-full "
              required
            />
          </div>
          <div>
            <label>Resale Price</label>
            <input
              {...register("resalePrice")}
              type="text"
              className="input input-bordered w-full "
              required
            />
          </div>
          <div>
            <label>Location</label>
            <input
              {...register("location")}
              type="text"
              className="input input-bordered w-full "
              required
            />
          </div>
          <div>
            <label>Years of Use</label>
            <input
              {...register("used")}
              type="text"
              className="input input-bordered w-full "
              required
            />
          </div>
          <div>
            <label>Condition</label>
            <input
              {...register("condition")}
              type="text"
              className="input input-bordered w-full "
              required
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              required
              {...register("description")}
              className="textarea textarea-bordered"
            ></textarea>
          </div>
        </div>
        <div className="mt-3">
          <label>Car Photo</label>
          <input
            {...register("image")}
            type="file"
            className="file-input file-input-bordered w-full"
          />
        </div>
        <input type="submit" value="Add Car" className="btn w-full my-5" />
      </form>
    </div>
  );
};

export default AddProduct;
