import { useState } from "react";
import axios from "axios";
import "../css/FindTechnician.css";

import CustomerSidebar from "../components/CustomerSidebar";

import {
  FaMapMarkerAlt,
  FaSearch
} from "react-icons/fa";

function FindTechnician() {

  const customer = JSON.parse(localStorage.getItem("customer"));

  const [showTechnicians, setShowTechnicians] = useState(false);

  const [technicians, setTechnicians] = useState([]);

  const [appliance, setAppliance] = useState("AC");

  const [problem, setProblem] = useState("Gas Leakage");

  // Dynamic Problems

  const problemOptions = {

    AC: [
      "Gas Leakage",
      "No Cooling",
      "Compressor Problem",
      "Fan Motor Issue",
      "Water Leakage"
    ],

    Refrigerator: [
      "No Cooling",
      "Compressor Problem",
      "Gas Leakage",
      "Ice Build-up",
      "Door Seal Problem"
    ],

    "Washing Machine": [
      "Motor Problem",
      "Water Leakage",
      "Drum Not Spinning",
      "Drainage Issue",
      "Power Failure"
    ],

    Cooler: [
      "Pump Problem",
      "Fan Motor Issue",
      "Water Leakage",
      "Cooling Pad Replacement",
      "No Cooling"
    ],

    "TV Repair": [
      "No Display",
      "Screen Problem",
      "Sound Issue",
      "Remote Not Working",
      "HDMI Port Issue"
    ],

    Electrician: [
      "Power Failure",
      "Switch Repair",
      "Wiring Issue",
      "Fan Installation",
      "MCB Trip"
    ]

  };

  const fetchTechnicians = async () => {

    try {

      const response = await axios.get(

        `${import.meta.env.VITE_API_URL}/api/customers/technicians`,

        {

          params: {

            appliance,

            problem

          }

        }

      );

      setTechnicians(response.data);

      setShowTechnicians(true);

    }

    catch (error) {

      console.log(error);

      alert("Failed to Load Technicians");

    }

  };

  const handleSearch = () => {

    fetchTechnicians();

  };

  return (

    <>

      <CustomerSidebar />

      <div className="find-container">

        {/* Top */}

        <div className="top-section">

          <div>

            <h2>

              Welcome, {customer?.name} 👋

            </h2>

            <p>

              Find the best appliance repair technicians near you

            </p>

          </div>

          <div className="location-box">

            <FaMapMarkerAlt />

            Your Location

          </div>

        </div>

        {/* Search */}

        <div className="search-box">

          <select

            value={appliance}

            onChange={(e) => {

              const selected = e.target.value;

              setAppliance(selected);

              setProblem(problemOptions[selected][0]);

            }}

          >

            <option>AC</option>

            <option>Refrigerator</option>

            <option>Cooler</option>

            <option>Washing Machine</option>

            <option>TV Repair</option>

            <option>Electrician</option>

          </select>

          <select

            value={problem}

            onChange={(e) =>

              setProblem(e.target.value)

            }

          >

            {

              problemOptions[appliance].map((item) => (

                <option

                  key={item}

                  value={item}

                >

                  {item}

                </option>

              ))

            }

          </select>

          <button onClick={handleSearch}>

            <FaSearch />

            Search

          </button>

        </div>

        {/* Technician List */}

        {

          showTechnicians && (

            <>

              <h3>

                Nearby Technicians

              </h3>

              <div className="technician-list">

                {

                  technicians.length > 0 ? (

                    technicians.map((item) => (

                      <div

                        className="tec-card"

                        key={item._id}

                      >

                        <div className="tec-left">

                          <img

                            src="https://i.pravatar.cc/150?img=12"

                            alt={item.name}

                          />

                          <div>

                            <h4>{item.name}</h4>

                            <p>

                              <strong>Service :</strong>

                              {" "}

                              {item.service}

                            </p>

                            <p>

                              <strong>Experience :</strong>

                              {" "}

                              {item.experience || "Not Updated"}

                            </p>

                            <p>

                              <strong>City :</strong>

                              {" "}

                              {item.city}

                            </p>

                            <p>

                              <strong>Email :</strong>

                              {" "}

                              {item.email}

                            </p>

                            <p>

                              <strong>Phone :</strong>

                              {" "}

                              {item.phone}

                            </p>

                          </div>

                        </div>

                        <div className="tec-right">

                          <h3>

                            ₹ {item.price}

                          </h3>

                        </div>

                      </div>

                    ))

                  ) : (

                    <h2>

                      No Technician Found

                    </h2>

                  )

                }

              </div>

            </>

          )

        }

      </div>

    </>

  );

}

export default FindTechnician;