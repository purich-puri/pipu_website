import "./navbar.css";
import hamNav from "../assets/hamburger-menu.png";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-sub-container">
        <div>PIPU</div>
        <div className="nav-hamburger">
          <a href="">
            <div>
              <img src={hamNav} alt="hamburger menu icon" width="40" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
