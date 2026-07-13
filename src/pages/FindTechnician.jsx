import { useState } from "react";
import "../css/FindTechnician.css";
import map from "../images/map.png";

import tech1 from "../images/technician1.jpg";
import tech2 from "../images/technician2.jpg";
import tech3 from "../images/technician3.jpg";
import tech4 from "../images/technician4.jpg";

import CustomerSidebar from "../components/CustomerSidebar";

import {
  FaMapMarkerAlt,
  FaSearch,
  FaStar
} from "react-icons/fa";

function FindTechnician() {

  // State
  const [showTechnicians, setShowTechnicians] = useState(false);

  // Search Button Function
  const handleSearch = () => {
    setShowTechnicians(true);
  };

  const technicians = [
    {
      name: "Rahul Kumar",
      service: "AC Repair",
      exp: "5 Years",
      price: "₹1500 - ₹2500",
      rating: "4.8",
      image: tech1
    },
    {
      name: "Amit Singh",
      service: "Refrigerator",
      exp: "7 Years",
      price: "₹1800 - ₹3000",
      rating: "4.7",
      image: tech2
    },
    {
      name: "Rohit Verma",
      service: "Plumber",
      exp: "6 Years",
      price: "₹1200 - ₹2200",
      rating: "4.6",
      image: tech3
    },
    {
      name: "Mohit Sharma",
      service: "Electrician",
      exp: "4 Years",
      price: "₹1300 - ₹2500",
      rating: "4.8",
      image: tech4
    }
  ];

  return (
    <>
      <CustomerSidebar />

      <div className="find-container">

        {/* Top Section */}

        <div className="top-section">

          <div>
            <h2>Welcome, Rahul Sharma 👋</h2>
            <p>Find the best appliance repair technicians near you</p>
          </div>

          <div className="location-box">
            <FaMapMarkerAlt />
            Andheri East, Mumbai
          </div>

        </div>

        {/* Search Box */}

        <div className="search-box">

          <select>
            <option>AC</option>
            <option>Refrigerator</option>
            <option>Cooler</option>
            <option>Washing Machine</option>
          </select>

          <select>
            <option>Gas Leakage</option>
            <option>No Cooling</option>
            <option>Water Leakage</option>
          </select>

          <button onClick={handleSearch}>
            <FaSearch /> Search
          </button>

        </div>

        {/* Map */}

        <div className="tec-map">
          <img src={map} alt="Map" />
        </div>

        {/* Technician List */}

        {showTechnicians && (

          <>
            <h3>Nearby Technicians</h3>

            <div className="technician-list">

              {technicians.map((item, index) => (

                <div className="tec-card" key={index}>

                  <div className="tec-left">

                    <img src={item.image} alt={item.name} />

                    <div>

                      <h4>{item.name}</h4>

                      <p>{item.service}</p>

                      <p>
                        <FaStar color="orange" /> {item.rating}
                      </p>

                      <p>{item.exp}</p>

                    </div>

                  </div>

                  <div className="tec-right">

                    <h4>{item.price}</h4>

                    <button>View Details</button>

                  </div>

                </div>

              ))}

            </div>
          </>

        )}

      </div>
    </>
  );
}

export default FindTechnician;