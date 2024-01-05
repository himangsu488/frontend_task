import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const role = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  let currentUserRole;

  if (localStorage.getItem("user")) {
    currentUserRole = JSON.parse(localStorage.getItem("user"));
  }

  return (
    <div className="navbar-main">
      {currentUserRole && (
        <div>
          
        <div className="navbar-header">
        <div className="navbar-logo"><img src="./binbag2.jpg" alt="binbag_logo2"></img></div>
        <div className="navbar-content">
          
          {currentUserRole === "Employee" && (
            <>
              <Link className="nav-home nav-link" to="/home"> Home </Link>
              <Link className="nav-form nav-link" to="/form"> Reimbursements Form </Link>
              <Link className="nav-login nav-link" to="/loginpage"> Login </Link>
              
            </>
          )}

          {currentUserRole === "Admin" && (
            <>
            <Link className="nav-dashboard nav-link" to="/home2"> Dashboard </Link>
            <Link className="nav-form nav-link" to="/form"> Reimbursements Form </Link>
            <Link className="nav-employee nav-link" to="/employeeinfo"> Employees </Link>
            <Link className="nav-login nav-link" to="/loginpage"> Login </Link>
            </>
          )}
          </div>
          
          <div className="current-role-main">
            <h3 className="current-role">Role selected as {" " + currentUserRole}</h3>
            <button className="role-switch" onClick={role}>
              Change Role
            </button>
          </div>
          </div>
        </div>
        
      )}
      <hr></hr>
    </div>
  );
};

export default Nav;
