import React from "react";

const ProductListItem = (product) => {
  return (
    <div className="d-flex justify-content-center">
    <div
      className="d-flex m-4 align-items-center justify-content-center"
      style={{ width: 900 ,height:200}}
    >
      <img
        src={product.image}
        height={150}
        width={180}
        alt={product.name}
        className="border-radius-9 me-4"
      /> 

      <h6 className="card-title me-4">{product.name}</h6>
      <p className="mt-2 me-4">{`Rs: ${product.price}`}</p>
      <p className="mt-2 me-4">Rating: {product.rating}</p>
      <div className="mt-4 me-4 d-flex align-items-center justify-content-center" >
        <button className="btn btn-danger ms-3" onClick={product.incrementItem}>+</button>
        <p className="ms-3">Quantity : {product.count}</p>
        <button className="btn btn-danger ms-3 me-3" onClick={product.decrementItem}>-</button>
        <i class="ri-delete-bin-2-fill" onClick={product.removeItem}></i>
      </div>
    </div>
    </div>
  );
};

export default ProductListItem;
