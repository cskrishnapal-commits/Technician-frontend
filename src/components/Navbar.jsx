import { Link } from "react-router-dom";
import { FaScrewdriverWrench } from "react-icons/fa6";

import "../css/navbar.css";

function Navbar({simple=false}) {
  return (
    <nav>
      <div className="logo">
        <FaScrewdriverWrench />
        <h2>Technician</h2>
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      {!simple &&(
        <>
        <li>
          <Link to="/customer-login">Customer Login</Link>
        </li>

        <li>
          <Link to="/technician-login">Technician Login</Link>
        </li>
        </>
      )}
      </ul>
    </nav>
  );
}

export default Navbar;