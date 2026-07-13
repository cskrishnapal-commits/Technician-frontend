import { useNavigate } from "react-router-dom";
import "../css/TechnicianHome.css";

function TechnicianHome() {

    const navigate = useNavigate();

    return (

        <div className="tech-home">

            <div className="welcome-card">

                <h1>Welcome 👋</h1>

                <h2>Rahul Sharma</h2>

                <p>AC Technician</p>

            </div>


            <div className="summary">

                <div className="summary-card">

                    <h3>12</h3>

                    <p>Total Services</p>

                </div>

                <div className="summary-card">

                    <h3>5 Years</h3>

                    <p>Experience</p>

                </div>

                <div className="summary-card">

                    <h3>4.8 ★</h3>

                    <p>Rating</p>

                </div>

                <div className="summary-card">

                    <h3>Kanpur</h3>

                    <p>City</p>

                </div>

            </div>





            <div className="service-card">

                <h2>Services Offered</h2>

                <ul>

                    <li>✔ AC Installation</li>

                    <li>✔ AC Repair</li>

                    <li>✔ Gas Refilling</li>

                    <li>✔ AC Maintenance</li>

                </ul>

            </div>


            <div className="action-card">

                <button
                    onClick={() => navigate("/technician-dashboard/profile")}
                >
                    My Profile
                </button>

                <button
                    onClick={() => navigate("/technician-dashboard/service-prices")}
                >
                    Service Prices
                </button>

            </div>

        </div>

    );

}

export default TechnicianHome;