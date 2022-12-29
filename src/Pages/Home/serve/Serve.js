import React from "react";
import { FaThumbsUp,FaMoneyCheckAlt,FaProcedures } from "react-icons/fa";

const Serve = () => {
  return (
    <div className="my-20">
      <div>
        <h2 className="text-center text-4xl font-bold mb-5">
          What our serve for you
        </h2>
        <p className="text-center mb-7">
          We provide many of our best servicesc for you and you will get the
          best benefits here
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-lg mx-auto">
        <div className=" my-4 bg-slate-100 p-3 rounded-xl">
          <div className="mb-3">
            <FaThumbsUp className="text-blue-400 ml-5 text-2xl"/>
          </div>
          <div>
            <h4 className="text-xl font-bold">Top Buy and Sell Car</h4>
            <p>
              Buy and Sell the best and most trusted cars, Who provide the best
              platform to you and easy to use
            </p>
          </div>
        </div>
        <div className="bg-slate-100 p-3 rounded-xl my-4">
          <div className="mb-3">
            <FaMoneyCheckAlt className="text-blue-400 text-2xl"/>
          </div>
          <div>
            <h4 className="text-xl font-bold">Easy Payment</h4>
            <p>
              Buy and Sell the best and most trusted cars, Who provide the best
              platform to you and easy to use
            </p>
          </div>
        </div>
        <div className="bg-slate-100 p-3 rounded-xl my-4">
          <div className="mb-3">
            <FaProcedures className="text-blue-400 text-2xl"/>
          </div>
          <div>
            <h4 className="text-xl font-bold">Easy to Use</h4>
            <p>
              Buy and Sell the best and most trusted cars, Who provide the best
              platform to you and easy to use
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serve;
