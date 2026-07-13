import { useState } from "react";
import "../css/ServicePrices.css";

function ServicePrices() {

    const [appliance, setAppliance] = useState("");

    const [problem, setProblem] = useState("");

    const [price, setPrice] = useState("");

    const [services, setServices] = useState([]);

    const savePrice = () => {

        if (
            appliance === "" ||
            problem === "" ||
            price === ""
        ) {

            alert("Please fill all fields");

            return;
        }

        const newService = {

            appliance,
            problem,
            price

        };

        setServices([...services, newService]);

        setAppliance("");

        setProblem("");

        setPrice("");

    };

    const deleteService = (index) => {

        const updated = services.filter((item, i) => i !== index);

        setServices(updated);

    };

    return (

        <div className="service-page">

            <h1>Service Price Management</h1>

            <p>
                Add repair prices for different appliance problems.
            </p>

            <div className="service-form">

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

                    <option>Water Leakage</option>

                    <option>Motor Problem</option>

                </select>

                <input
                    type="number"
                    placeholder="Enter Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <button onClick={savePrice}>

                    Save Price

                </button>

            </div>

            <div className="table-box">

                <table>

                    <thead>

                        <tr>

                            <th>Appliance</th>

                            <th>Problem</th>

                            <th>Price</th>

                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            services.map((item, index) => (

                                <tr key={index}>

                                    <td>{item.appliance}</td>

                                    <td>{item.problem}</td>

                                    <td>₹{item.price}</td>

                                    <td>

                                        <button
                                            className="delete-btn"
                                            onClick={() => deleteService(index)}
                                        >

                                            Delete

                                        </button>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default ServicePrices;