import { useQuery } from "@tanstack/react-query";
import React from "react";


const AllSellers = () => {
  const { data: allsellers = [] } = useQuery({
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

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allsellers &&
              allsellers.map((seller, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td>
                    <button className="btn bg-red-500 hover:bg-red-700 ">
                      Delete
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
