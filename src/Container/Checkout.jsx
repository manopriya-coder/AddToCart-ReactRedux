import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductListItem from "../Component/ProductListItem";
import { Productlist } from "../Data/Productlist";

import { useNavigate, useParams } from "react-router-dom";

const Checkout = () => {
  const params = useParams();
  const list = useSelector((state) => state.cart.list);

  const [state, setState] = useState(
    params.id
      ? [
          {
            ...Productlist.find(
              (element) => element.id === parseInt(params.id)
            ),
            count: 1,
          },
        ]
      : list
  );

  const navigate = useNavigate();

  const incrementItem = (item) => {
    const index = state.findIndex((product) => product.id === item.id);
    setState((state) => [
      ...state.slice(0, index),
      { ...item, count: item.count + 1 },
      ...state.slice(index + 1),
    ]);
  };

  const decrementItem = (item) => {
    if (item.count === 1) {
      removeCartItem(item);
    } else {
      const index = state.findIndex((product) => product.id === item.id);
      setState((state) => [
        ...state.slice(0, index),
        { ...item, count: item.count - 1 },
        ...state.slice(index + 1),
      ]);
    }
  };

  const removeCartItem = (item) => {
    const index = state.list.findIndex((product) => product.id === item.id);
    setState((state) => [...state.slice(0, index), ...state.slice(index + 1)]);
  };

  return (
    <>
      {state.length > 0 ? (
        <>
          {state.map((item) => (
            <ProductListItem
              {...item}
              key={item.id}
              incrementItem={() => incrementItem(item)}
              decrementItem={() => decrementItem(item)}
              removeItem={() => removeCartItem(item)}
            />
          ))}
          <div className="d-flex align-items-center justify-content-center">
            <button
              className="btn btn-success p-2 m-4"
              onClick={() => navigate("/success")}
            >
              Place Order
            </button>
          </div>
        </>
      ) : (
        <h4>No Items in the checkout</h4>
      )}
    </>
  );
};

export default Checkout;
