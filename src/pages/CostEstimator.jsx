import { useState } from "react";
import "../css/CostEstimator.css";
import { useNavigate } from "react-router-dom";
function CostEstimator() {

  const [appliance, setAppliance] = useState("");
  const [problem, setProblem] = useState("");
  const [cost, setCost] = useState(null);
  const navigate= useNavigate();

  const estimateCost = () => {

    if (appliance === "AC" && problem === "Gas Leakage") {
      setCost(2500);
    }

    else if (appliance === "AC" && problem === "No Cooling") {
      setCost(1800);
    }

    else if (appliance === "Refrigerator" && problem === "Not Cooling") {
      setCost(2200);
    }

    else if (appliance === "Washing Machine" && problem === "Motor Problem") {
      setCost(3200);
    }

    else {
      setCost(1000);
    }
  };

  return (

    <div className="cost-page">

      <h1>Cost Estimator</h1>

      <p>
        Estimate your repair cost before booking a technician.
      </p>

      <div className="cost-form">

        <select
          value={appliance}
          onChange={(e) => setAppliance(e.target.value)}
        >

          <option value="">Select Appliance</option>
          <option>AC</option>
          <option>Refrigerator</option>
          <option>Washing Machine</option>
          <option>Cooler</option>

        </select>

        <select
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        >

          <option value="">Select Problem</option>
          <option>Gas Leakage</option>
          <option>No Cooling</option>
          <option>Not Cooling</option>
          <option>Motor Problem</option>

        </select>

        <button onClick={estimateCost}>
          Estimate Cost
        </button>

      </div>

      {cost && (

        <div className="estimate-card">

          <h2>Estimated Cost</h2>

          <div className="row">
            <span>Visit Charge</span>
            <span>₹200</span>
          </div>

          <div className="row">
            <span>Labour Charge</span>
            <span>₹{cost - 800}</span>
          </div>

          <div className="row">
            <span>Spare Parts</span>
            <span>₹800</span>
          </div>

          <hr />

          <div className="total">
            <span>Total Estimated Cost</span>
            <span>₹{cost}</span>
          </div>

          <button className="book-btn" onClick={() => navigate('/customer-dashboard/find-technician')}>
            Find Technician
          </button>

        </div>

      )}

    </div>
  );
}

export default CostEstimator;