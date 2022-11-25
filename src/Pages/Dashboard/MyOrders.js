import { useQuery } from "@tanstack/react-query";
import React, { useContext,  } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import Loader from "../Shared/Loader/Loader";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  

  const { data: bookings = [],isLoading } = useQuery({
    queryKey: ["booking",user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
      );
      const data = await res.json();
      return data;
    },
  });
  if(isLoading){
    return <Loader></Loader>
  }
  return (
    <div className="my-16">
        <h2 className="text-4xl text-center mb-6 font-bold">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Car Model</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings && bookings?.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.name}</td>
                <td>{booking.carModel}</td>
                <td>${booking.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
