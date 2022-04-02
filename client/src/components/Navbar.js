import React, { useState, useRef } from "react";
import { faBars, faI, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [faIcon, setFaIcon] = useState(faBars);
  const menuList = useRef("None");

  // toggleing menu icon
  const menuHandler = () => {
    if (!menu) {
      setFaIcon(faXmark);
    } else {
      setFaIcon(faBars);
    }
    return setMenu(!menu);
  };

  return (
    <div className="navbar-container">
      <nav>
        <div className="header-elements">
          <h3>StaplePiecesCo</h3>
          <FontAwesomeIcon size="2x" icon={faIcon} onClick={menuHandler} />
          <ul className={menu ? "Flex" : "None"}>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
            <li>Instagram</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
