import React from "react";
import { Link } from "react-router-dom";

const Product = () => {

const products = [
    {id:1,name:"product1"},
    {id:2,name:"product2"},
    {id:3,name:"product3"},
]

  return (
    <div className="w-full h-screen bg-[#006b55] text-shadow-white flex items-center justify-center gap-4">
     
     {products.map((item)=>(
        
        <div className="bg-[#080817] p-4 rounded active:scale-95 transition-transform">
            
            <Link to={"/product/details/"+item.id}>{item.name}</Link>
        </div>
        
     ))}
    </div>
  );
};

export default Product;
