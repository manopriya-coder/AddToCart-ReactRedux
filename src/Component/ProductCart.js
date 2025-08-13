import React from "react";
import { useNavigate } from "react-router-dom";
import { Productlist } from "../Data/Productlist";

const ProductCart = () => {
  const products = Productlist;
  console.log(products);

  const navigate = useNavigate();
  return (
    <>
      {products.map((product) => {
        return (
          <div
            className="card m-2 cursor-pointer"
            style={{ width: 250 }}
            role="button"
              onClick={() => navigate(`/product/${product.id}`)}
          >
            <div className="mt-2 ">
              <img
                src={product.image}
                height={150}
                width={250}
                alt={product.name}
                className="border-radius-9 p-2"
              />
            </div>
            <div className="card-body">
              <h6 className="card-title">{product.name}</h6>
              <p className="mt-2">{`Rs: ${product.price}`}</p>
              <p className="mt-2">Rating: {product.rating}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCart;
