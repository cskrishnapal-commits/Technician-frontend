import { Link } from "react-router-dom";
import { FaScrewdriverWrench} from "react-icons/fa6";
import{FaHome} from "react-icons/fa"

import "../css/navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <FaScrewdriverWrench />
        <h2>Tech Hub</h2>
      </div>

      <ul>
        <li>
          <FaHome />
          <Link to="/">Home</Link>
        </li>
</ul>
    </nav>
  );
};


export default Navbar;