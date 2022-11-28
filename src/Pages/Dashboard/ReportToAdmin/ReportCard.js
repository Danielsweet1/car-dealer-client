import React from "react";

const ReportCard = ({report,handleDelete}) => {

    
  return (
    <div className="mt-8">
      <div className="card grid grid-cols-2 shadow-xl">
        <figure>
          <img src={report.image} className='h-full w-full rounded-xl' alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{report.model}</h2>
          <p>Seller: {report.sellerName}</p>
          <p>price: ${report.price}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleDelete(report._id)} className="btn btn-error text-white">remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
