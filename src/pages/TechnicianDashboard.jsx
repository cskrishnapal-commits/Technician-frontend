import { Outlet } from "react-router-dom";
import TechnicianSidebar from "../components/TechnicianSiderbar";
import "../css/TechnicianDashboard.css";


function TechnicianDashboard() {

    return (

        <div className="technician-dashboard">

            <TechnicianSidebar />

            <div className="technician-content">

                <Outlet />

            </div>

        </div>
        

    );

}

export default TechnicianDashboard;