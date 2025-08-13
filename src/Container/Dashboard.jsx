import React from "react";
import ProductCart from "../Component/ProductCart";
import { Productlist } from "../Data/Productlist";

const Dashboard = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center p-3 h-[auto]">
      {/* <div className="h-full"> */}
        <ProductCart />
      {/* </div> */}
      {/* {Productlist.map((product)=> <ProductCart {...product} key={product.id}/>)} */}
    </div>
  );
};

export default Dashboard;
