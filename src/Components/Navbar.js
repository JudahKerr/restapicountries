import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSolid, faMoon } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const icon =
    "https://cdn-icons.flaticon.com/png/512/4489/premium/4489231.png?token=exp=1656265171~hmac=a5f9891851ef80200c5d25a08274711d";

  return (
    <div className="navbar">
      <a>Where in the world?</a>
      <div className="darkModeDiv">
        <i className="fa-solid fa-moon fa-2x"></i>
        <span>Dark Mode</span>
      </div>
    </div>
  );
}

export default Navbar;
