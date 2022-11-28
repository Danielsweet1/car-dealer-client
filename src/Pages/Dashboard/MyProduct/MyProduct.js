import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AddContext } from "../../../contexts/addProvider/AddProvider";
import { AuthContext } from "../../../contexts/AuthContext/AuthProvider";
import UseTitle from "../../../hooks/UseTitle";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const {handleAdd} = useContext(AddContext)
  UseTitle("My Products");

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myproducts?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/myproducts/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Deleted Successfully");
            refetch();
          }
        });
    }
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Model</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={product.image_url}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.seller_name}</div>
                        <div className="text-sm opacity-50">
                          {product.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{product.model}</td>
                  <td>${product.resale_price}</td>
                  {!product?.sold ? (
                    <>
                      <td>
                        <button>Available</button>
                      </td>
                      <td>
                        <button onClick={()=>handleAdd(product._id)} className="btn btn-outline btn-success">
                          Advertise
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                    <td><span className="text-green-500">Sold</span></td>
                    <td></td>
                    </>
                  )}
                  <td>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="btn btn-square btn-outline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
