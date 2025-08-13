import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductListItem from "../Component/ProductListItem";
import { modifyItem, removeItem } from "../Redux/Slice/Cart";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const list = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const incrementItem = (item) => {
    dispatch(modifyItem({ ...item, count: item.count + 1 }));
  };

  const decrementItem = (item) => {
    if (item.count === 1) {
      dispatch(removeItem(item));
    } else {
      dispatch(modifyItem({ ...item, count: item.count - 1 }));
    }
  };

  const removeCartItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <>
      {list.length > 0 ? (
        <>
          {list.map((item) => (
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
              onClick={() => navigate("/checkout")}
            >
              Go to Checkout
            </button>
          </div>
        </>
      ) : (
        <h4>No Items in the cart</h4>
      )}
    </>
  );
};

export default CartPage;
