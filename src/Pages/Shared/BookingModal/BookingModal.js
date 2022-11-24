import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthContext/AuthProvider";

const BookingModal = () => {
    const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  console.log(user.email)

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit()}>
            <div className="form-control mb-2">
              <label>Name</label>
              <input
                type="text"
                defaultValue={user?.displayName}
                disabled
                className="input input-bordered"
                {...register("name")}
                required
              />
            </div>
            <div className="form-control">
              <label>email</label>
              <input
                type="email"
                defaultValue={user?.email}
                disabled
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
            <div className="form-control">
              <label>Password</label>
              <input
                type="password"
                className="input input-bordered"
                {...register("password")}
                required
              />
            </div>
          </form>
          <div className="modal-action">
            <label htmlFor="booking-modal" className="btn">
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
