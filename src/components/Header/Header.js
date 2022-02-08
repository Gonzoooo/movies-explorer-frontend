import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ main }) {
    return (
        <header className={main ? "header" : "header header__logged"}>
            <Navigation main={main} />
        </header>
    );
}

export default Header;
