///create dropdown component with links for more info such as contact and about us!
 



import React, { useState } from "react";


const Dropdown = ({ setIsDropdownOpen }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleDropdown = () => {
    setShowMenu((prev) => !prev);
    setIsDropdownOpen(true);
  };

  return (
    <div className="dropdown-container">
      <label className="dropdown-label">More Info</label>
      <button
        className="dropdown-button"
        onClick={toggleDropdown}
        type="button"
      >
        ☰
      </button>
      {showMenu && (
        <ul className="dropdown-menu">
           
            <a href="/Contact">Contact</a><br></br>
           
           
            <a href="/AboutUs">About Us</a>
           
        </ul>
      )}
    </div>
  );
};

export default Dropdown;