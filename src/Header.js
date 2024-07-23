import React from "react";
import notesimg from "./notesimg.png";

function Header() {
    return (
        <Header>
            <h1>Sticky Notes</h1>
            <img src={notesimg} className="App-img" alt="stickynotes"/>
        </Header>
    );
}

export default Header;