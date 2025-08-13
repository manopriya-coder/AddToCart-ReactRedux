import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className="p-3 bg-secondary">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex">
          <button className="btn btn-success me-4" onClick={()=>navigate("/")}>Home</button>
          <input
            type="Search"
            className="form-control"
            placeholder="search..."
          />
          <button className="btn btn-success ms-3" onClick={()=>navigate('/cartPage')}>Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
