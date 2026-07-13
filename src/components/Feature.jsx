import {
  FaLocationDot,
  FaCalculator,
  FaShieldHalved,
} from "react-icons/fa6";

import "../css/home.css";

function Feature() {
  return (
    <section className="features" id="features">

      <h2>Our Features</h2>

      <div className="underline"></div>

      <div className="feature-cards">

        <div className="feature-card">

          <div className="feature-icon">

            <FaLocationDot />

          </div>

          <h3>Nearby Technicians</h3>

          <p>

            Search skilled technicians based on your City and Area.

          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">

            <FaCalculator />

          </div>

          <h3>Repair Cost Estimator</h3>

          <p>

            Get estimated repair cost for various appliances and problems.

          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">

            <FaShieldHalved />

          </div>

          <h3>Verified & Trusted</h3>

          <p>

            All technicians are verified and provide quality appliance repair services.

          </p>

        </div>

      </div>

    </section>
  );
}

export default Feature;