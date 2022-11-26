import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseTitle from "../../../hooks/UseTitle";

const AllSellers = () => {
  UseTitle('All Sellers')
  const { data: allsellers = [], refetch } = useQuery({
    queryKey: ["allsellers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/allsellers`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleVerify = (id) => {
    fetch(`http://localhost:5000/seller/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
        }
      });
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure You want to Delete?");
    if(proceed){
      fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
        }
      });
    }
    
  };

  return (
    <div className="my-10 ">
      <h2 className="text-3xl font-bold text-center my-2">All Sellers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allsellers &&
              allsellers.map((seller, i) => (
                <tr key={seller._id}>
                  <th>{i + 1}</th>
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td>
                    {!seller?.verified ? (
                      <button
                        onClick={() => handleVerify(seller._id)}
                        className="btn btn-outline btn-success"
                      >
                        Verify
                      </button>
                    ) : (
                      <span className="text-green-500">Verified</span>
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleDelete(seller._id)} className="btn btn-square btn-outline">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
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

export default AllSellers;
