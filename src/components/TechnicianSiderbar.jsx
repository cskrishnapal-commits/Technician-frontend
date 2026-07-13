import { useNavigate } from "react-router-dom";

import {
FaHome,
FaUser,
FaRupeeSign,
FaSignOutAlt,
FaTools
}
from "react-icons/fa";

import "../css/sidebar.css";

function TechnicianSidebar(){

const navigate = useNavigate();

return(

<div className="sidebar">

<div className="sidebar-logo">

<FaTools/>

<h2>Technician</h2>

</div>

<ul>

<li onClick={()=>navigate("/technician-dashboard")}>

<FaHome/>

Dashboard

</li>

<li onClick={()=>navigate("/technician-dashboard/profile")}>

<FaUser/>

My Profile

</li>

<li onClick={()=>navigate("/technician-dashboard/service-prices")}>

<FaRupeeSign/>

Service Prices

</li>

<li onClick={()=>navigate("/")}>

<FaSignOutAlt/>

Logout

</li>

</ul>

</div>

)

}

export default TechnicianSidebar;