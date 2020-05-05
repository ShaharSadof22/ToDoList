import React from "react";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import './Header.css';

function Header(props) {
  return (
    <header className={props.mode ? "header-dark" : "header-light"} >
      <h1>
        <Brightness5Icon />
        Keeper 
      </h1>
    </header>
  );
}

export default Header;
