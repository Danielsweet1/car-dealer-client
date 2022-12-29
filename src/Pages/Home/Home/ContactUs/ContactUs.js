import React from "react";

const ContactMe = () => {
 
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className=" grid grid-cols-1 w-full lg:w-1/2 mx-auto rounded-xl">
        <div className="bg-gradient-to-r from-red-600 to-blue-600 p-10 rounded-lg">
          <h2 className="text-center font-bold text-4xl mb-5 text-white">
            Contact Us
          </h2>
          <form >
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full mb-4"
              name="user_name"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full mb-4"
              name="user_email"
            />
            <textarea
              type="text"
              name="message"
              className="textarea textarea-bordered w-full h-32"
              placeholder="Your Message"
            ></textarea>
            <div className="text-center mt-3">
              <input type="submit" value="Submit" className="btn btn-success text-white w-60 " />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;