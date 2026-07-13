import "../css/customerhome.css";
import {
  FaUsers,
  FaTools,
  FaMoneyBillWave,
} from "react-icons/fa";

function CustomerHome() {

  return (

    <div className="dashboard-home">

      <h2>Welcome Back 👋</h2>

      <p>Find trusted technicians for your home services.</p>

      <div className="dashboard-cards">

        <div className="dashboard-card">

          <FaUsers className="card-icon" />

          <h3>Nearby Technicians</h3>

          <h1>8</h1>

        </div>

        <div className="dashboard-card">

          <FaTools className="card-icon" />

          <h3>Total Services</h3>

          <h1>12</h1>

        </div>

        <div className="dashboard-card">

          <FaMoneyBillWave className="card-icon" />

          <h3> Total Spend </h3>

          <h1>₹2500</h1>

        </div>

      </div>

      <div className="recent-box">

        <h3>Recent Activities</h3>

        <ul>

          <li>✔ AC Repair Search</li>

          <li>✔ Refrigerator Cost Estimate</li>

          <li>✔ Profile Updated</li>

        </ul>

      </div>

    </div>

  );
}

export default CustomerHome;