import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Productlist } from "../Data/Productlist";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Redux/Slice/Cart";

const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const props = Productlist.find(
    (element) => element.id === parseInt(params.id)
  );
  // console.log(props);
  const [alert, setAlert] = useState(false);

  const addToCart = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 2000);
    dispatch(addItem(props));
    // console.log(props);
  };

  const list = useSelector((state) => state.cart.list);

  const element = list.find((item) => item.id === props.id);

  return (
    <div className="card m-auto mt-3">
      {alert && <span className="alert alert-success">Item added to cart</span>}
      <div className="m-auto ">
        <img
          src={props.image}
          height={300}
          width={400}
          alt={props.name}
          className="border-radius-9 p-2"
        />
      </div>
      <div className="card-body m-auto">
        <h6 className="card-title">{props.name}</h6>
        <p className="mt-2">{`Rs: ${props.price}`}</p>
        <p className="mt-2">Rating: {props.rating}</p>
        <div className="mt-3">
          <>
            <button className="btn btn-success" onClick={()=> navigate(`/checkout/${props.id}`)}>Buy Now</button>
            {element?.count > 0 ? (
              <button
                className="ms-3 btn btn-outline-warning"
                onClick={() => navigate("/cartPage")}
              >
                Go to cart
              </button>
            ) : (
              <button className="ms-3 btn btn-success" onClick={addToCart}>
                Add To Cart
              </button>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Product;
