import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setshowLogin, setIsLoggedIn  }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    setIsLoggedIn(true);  
    setshowLogin(false);

    try {
      const response = await fetch("http://localhost:5014/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      alert(result.message);
      setshowLogin(false);
      navigate("/");

    } catch (error) {
      console.error("Login error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleLogin}>
        <div className="login-popup-title">
          <h2>Login</h2>
          <img src={assets.cross_icon} alt="Close" onClick={() => setshowLogin(false)}/>
        </div>
        <div className="login-popup-inputs">
          <input type="email" placeholder="Your email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit">Login</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>To continue, accept the terms and conditions</p>
        </div>
        <p>
          Create a new account?{" "}
          <Link to="/register" onClick={() => setshowLogin(false)}>
            <span>Click here</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
