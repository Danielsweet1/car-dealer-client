import React, { useEffect, useState } from "react";
import AdCard from "./AdCard";

const Advertise = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://car-dealer-server.vercel.app/advertise`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

 if(products.length > 0 ){
  return (
    <div className={`my-20 max-w-screen-xl mx-auto `}>
      {products && (
        <h2 className="text-3xl text-center mb-7 font-bold">Advertisement</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products &&
          products.map((product) => (
            <AdCard key={product._id} product={product}></AdCard>
          ))}
      </div>
    </div>
  );
 }
};

export default Advertise;
