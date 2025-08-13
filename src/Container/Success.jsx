import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    setTimeout(() => navigate("/"), 5000);
  }, [navigate]);
  return (
    <div className="d-flex align-items-center justify-content-center">
        
    <h5 className="mt-5">
      Your order have been placed successfully. You will be redirected in {count}{" "}
      seconds
    </h5>
    </div>
  );
};

export default Success;
