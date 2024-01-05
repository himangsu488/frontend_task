import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RolePage = () => {
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  const submitRole = (e) => {
    e.preventDefault(); 
    if (!userRole) {
        alert("Please select your role before proceeding.");
        return;
      }
      
    localStorage.setItem("user", JSON.stringify(userRole));
    const destination = userRole === "Employee" ? "/home" : "/home2";
  navigate(destination);
  };

  return (
    <div className="landingpage-main">
        <img src="./binbag.png" alt="binbag logo" className="logo_binbag"></img>
        <h1 className="landingpage-welcome">WELCOME TO BINBAG</h1>
        <form className="landingpage-form" onSubmit={submitRole}>
            
            <h3 className="landingpage-role">Select your Role</h3>
            <div className="role-select">
                <div className="role-option">
                <input type="radio" id="employee" className="role-option-input" value="Employee"
                    checked={userRole === "Employee"} onChange={() => setUserRole("Employee")} />
                <label htmlFor="employee" className="role-option-label"> Employee </label>
                </div>

                <div className="role-option">
                <input type="radio" id="admin" className="role-option-input" value="Admin" 
                checked={userRole === "Admin"} onChange={() => setUserRole("Admin")} />
                <label htmlFor="admin" className="role-option-label"> Admin </label>
                </div>
            </div>
            <div className="landingpage-button-main">
                <button type="submit" className="landingpage-button"> Proceed </button>
            </div>
        </form>
    </div>
  );
};

export default RolePage;
