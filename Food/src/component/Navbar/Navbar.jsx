// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate, Link } from 'react-router-dom';
// import './Navbar.css';
// import { assets } from '../../assets/assets';
// import { selectCartAmount } from '../../Redux/Cart';

// export const Navbar = ({ setshowLogin }) => {
//   const navigate = useNavigate();
//   const [menu, setMenu] = useState("home");

//   const totalCartAmount = useSelector(selectCartAmount);

//   const [isLoggedIn, setIsLoggedIn] = useState(
//     Boolean(localStorage.getItem('token'))
//   );
//   useEffect(() => {
//     setIsLoggedIn(Boolean(localStorage.getItem('token')));
//   }, []);
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//     navigate('/');
//   };

//   return (
//     <div className="navbar">
//       <Link to="/">
//         <img src={assets.logo} alt="logo" className="logo" />
//       </Link>
//       <ul className="navbar-menu">
//         <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}> Home</Link>
//         <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
//         <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a>
//         <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a>
//         <Link to="/admin" onClick={() => setMenu("admin")} className={menu === "admin" ? "active" : ""}>Admin</Link>
//       </ul>
//       <div className="navbar-right">
//         <img src={assets.search_icon} alt="search" />
//         <div className="navbar-search-icon">
//           <Link to="/cart">
//             <img src={assets.basket_icon} alt="cart" />
//           </Link>
//           <div className={totalCartAmount === 0 ? "" : "dot"}></div>
//         </div>
//         {isLoggedIn ? (
//           <button onClick={handleLogout}>Logout</button>
//         ):(
//           <button onClick={()=>setshowLogin(true)}>Login</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { selectCartAmount } from '../../Redux/Cart';

export const Navbar = ({ setshowLogin, isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("home");

  const totalCartAmount = useSelector(selectCartAmount);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a>
        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a>
        <Link to="/admin" onClick={() => setMenu("admin")} className={menu === "admin" ? "active" : ""}>Admin</Link>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />

        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" />
          </Link>
          <div className={totalCartAmount === 0 ? "" : "dot"}></div>
        </div>

        {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={() => setshowLogin(true)}>Login</button>
      )}
      </div>
    </div>
  );
};

export default Navbar;

