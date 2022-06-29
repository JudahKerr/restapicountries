import { useState } from "react";

function Navbar(props) {
  const [mode, setMode] = useState("Dark Mode");

  function handleClick() {
    props.themeSwitch();
    if (mode === "Dark Mode") {
      setMode("Light Mode");
    } else {
      setMode("Dark Mode");
    }
  }

  return (
    <div id={props.theme} className="navbar">
      <a href="/">Where in the world?</a>
      <div className="darkModeDiv" onClick={handleClick}>
        <i className="fa-solid fa-moon fa-2x"></i>
        <span>{mode}</span>
      </div>
    </div>
  );
}

export default Navbar;
