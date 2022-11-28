import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import UseTitle from "../../hooks/UseTitle";
import Loader from "../Shared/Loader/Loader";

const MyOrders = () => {
  UseTitle("My Orders");
  const { user } = useContext(AuthContext);

  const {
    data: bookings = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["booking", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://car-dealer-server.vercel.app/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you Sure you want to Deleter?");
    if (proceed) {
      fetch(`https://car-dealer-server.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            refetch();
            toast.success("Deletion Successful");
          }
        });
    }
  };

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="my-16">
      <h2 className="text-4xl text-center mb-6 font-bold">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Name</th>
              <th>Car Model</th>
              <th>Price</th>
              <th>Status</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings?.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={booking.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{booking.name}</td>
                  <td>{booking.carModel}</td>
                  <td>${booking.price}</td>
                  <td>
                    {!booking.paid ? (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-success">Pay</button>
                      </Link>
                    ) : (
                      <span className="text-green-500 font-semibold">Paid</span>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(booking._id)}
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

export default MyOrders;
