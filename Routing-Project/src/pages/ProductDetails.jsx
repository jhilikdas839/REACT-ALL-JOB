import React from "react";
import { useParams,useNavigate } from "react-router-dom";

const ProductDetails = () => {
    const navigate = useNavigate();
  const params = useParams();

  const Handeler = ()=>{
    navigate("/")
  }

  return (
    <div className="w-full h-screen bg-[#006b55] text-shadow-white flex items-center justify-center flex-col">
      <h1 className="text-8xl font-bold">Product id :{params.id}</h1>
      <button 
       onClick={Handeler}
      className="mt-8 bg-[#ea3434] font-medium text-white p-2 rounded transition-transform active:scale-97">
        Go back to the product page
      </button>
    </div>
  );
};

export default ProductDetails;
