import { Link ,useNavigate} from "react-router-dom";

import {
FaHome,
FaSearch,
FaCalculator,
FaUser,
FaSignOutAlt,
FaTools
}
from "react-icons/fa";

import "../css/sidebar.css";

function CustomerSidebar(){
    const navigate=useNavigate();

return(

<div className="sidebar">

<div className="sidebar-logo">

<FaTools />

<h2>Technician</h2>

</div>

<ul>

<li onClick={() => navigate("/customer-dashboard")}>



<FaHome />

Dashboard



</li>

<li onClick={() => navigate("/customer-dashboard/find-technician")}>



<FaSearch />

Find Technician



</li>

<li onClick={() => navigate("/customer-dashboard/cost-estimator")}>



<FaCalculator />

Cost Estimator



</li>

<li onClick={() => navigate("/customer-dashboard/profile")}>



<FaUser />

My Profile


</li>

<li>

<Link to="/">

<FaSignOutAlt />

Logout

</Link>

</li>

</ul>

</div>

)

}

export default CustomerSidebar;