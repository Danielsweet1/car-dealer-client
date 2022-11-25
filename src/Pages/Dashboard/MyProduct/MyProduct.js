import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext/AuthProvider";
import UseTitle from "../../../utilities/UseTitle";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  UseTitle("My Products");

  const { data: products = [] } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myproducts?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody >
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
                        <div className="text-sm opacity-50">{product.location}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {product.model}
                  </td>
                  <td>${product.resale_price}</td>
                  <td>
                    {
                        !product?.sold ? <button>Available</button> : <span className="text-green-500">Sold</span>
                    }
                  </td>
                  <td><button className="btn btn-outline btn-error">Delete</button></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
