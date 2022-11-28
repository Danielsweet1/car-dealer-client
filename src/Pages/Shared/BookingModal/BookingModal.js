import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthContext/AuthProvider";

const BookingModal = ({item,setItem}) => {
  const { user } = useContext(AuthContext);


  const handleBooking = e =>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value;
    const email = form.email.value;
    const carModel = form.carModel.value;
    const price= form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const image = item.image_url
    const productId = item._id
    const booking = {
      name,email,carModel,price,phone,location,image,productId
    }

    fetch('https://car-dealer-server.vercel.app/booking',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        toast.success('Booking Successful')
        setItem(null)
      }
    })
  }
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <form onSubmit={handleBooking}>
            <div className="form-control mb-2">
              <label>Name</label>
              <input
                type="text"
                defaultValue={user?.displayName}
                disabled
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label>email</label>
              <input
                type="email"
                defaultValue={user?.email}
                disabled
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label>Model</label>
              <input
              defaultValue={item.model}
              disabled
              name="carModel"
                type="text"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label>Price</label>
              <input
              defaultValue={item.resale_price}
              disabled
                type="text"
                name="price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label>Meeting Location</label>
              <input
                type="text"
                name="location"
                className="input input-bordered"
                required
              />
            </div>
            <div className="modal-action">
            <label className="btn w-80 mx-auto">
              <input type="submit" value="Submit" />
            </label>
          </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
