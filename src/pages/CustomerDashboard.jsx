import CustomerSidebar from "../components/CustomerSidebar.jsx";
import "../css/Customerdashboard.css";
import { Outlet } from "react-router-dom";


function CustomerDashboard() {
  return (
    <div className="dashboard-layout">

      <CustomerSidebar />

      <div className="dashboard-content">
        <Outlet />
      </div>

    </div>
  );
}

export default CustomerDashboard;