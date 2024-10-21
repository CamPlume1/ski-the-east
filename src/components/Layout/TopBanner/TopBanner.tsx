import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"

const TopNav: React.FC = () => {
  return (
    <div className="TopNav">
      <div className="TopLabel">Ski The East</div>
      <div className="TopRouter">
        <Link to={"/home"}>Home </Link>
        <Link to={"/trips"}>Trips </Link>
        <Link to={"/days"}>Days</Link>
        <Link to={"/setups"}>Setups </Link>
        <Link to={"/about-us"}>About Us </Link>
      </div>
    </div>
  );
};

export default TopNav;