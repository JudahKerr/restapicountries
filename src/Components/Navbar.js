import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSolid, faMoon } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  

  return (
    <div id={props.theme} className="navbar">
      <a>Where in the world?</a>
      <div className="darkModeDiv" onClick={props.themeSwitch}>
        <i className="fa-solid fa-moon fa-2x"></i>
        <span>Dark Mode</span>
      </div>
    </div>
  );
}

export default Navbar;
