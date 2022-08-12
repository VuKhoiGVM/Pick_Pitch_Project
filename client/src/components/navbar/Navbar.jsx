import "./navbar.css";
import "./navbar.css";
import {Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Profile from '../profile/Profile';
const Navbar = () => {
  const { user } = useContext(AuthContext); // check user who accessing webNavbar.jsxsite
  console.log("Navbar")
  console.log(user)
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Book4Fun.com</span>
        </Link >
        {user ? <Profile user={user.username}/> : (
            <div className="navItems">
              <Link to="/login"><button className="navButton">Đăng nhập/ Đăng ký</button></Link>
            </div>  
        )}
      </div>
    </div>
  );
};

export default Navbar;