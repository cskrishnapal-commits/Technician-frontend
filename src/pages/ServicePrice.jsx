import { useState, useEffect } from "react";
import axios from "axios";
import "../css/ServicePrices.css";


function ServicePrices() {

    const [appliance, setAppliance] = useState("");

    const [problem, setProblem] = useState("");

    const [price, setPrice] = useState("");

    const [services, setServices] = useState([]);
    const [editId, setEditId] = useState(null);


    const savePrice = async () => {

        if (
            appliance === "" ||
            problem === "" ||
            price === ""
        ) {

            alert("Please fill all fields");

            return;

        }

        try {

            const technician = JSON.parse(
                localStorage.getItem("technician")
            );

            if (editId) {

                await axios.put(

                    `${import.meta.env.VITE_API_URL}/api/service-prices/${editId}`,

                    {

                        appliance,

                        problem,

                        price

                    }

                );

                alert("Service Updated Successfully");

                setEditId(null);

            }

            else {

                await axios.post(

                    `${import.meta.env.VITE_API_URL}/api/service-prices`,

                    {

                        technicianId: technician._id,

                        appliance,

                        problem,

                        price

                    }

                );

                alert("Service Added Successfully");

            }

            fetchServices();

            setAppliance("");

            setProblem("");

            setPrice("");

        }

        catch (error) {

            alert(

                error.response?.data?.message ||

                " Failed To Add service price"

            );

        }

    };


    const deleteService = async (id) => {

        try {

            await axios.delete(
                `${import.meta.env.VITE_API_URL}/api/service-prices/${id}`
            );

            alert("Service Deleted Successfully");

            fetchServices();

        }

        catch (error) {

            alert(
                error.response?.data?.message ||
                "Delete Failed"
            );

        }

    };
    const editService = (service) => {

        setAppliance(service.appliance);

        setProblem(service.problem);

        setPrice(service.price);

        setEditId(service._id);

    };
    const fetchServices = async () => {

        try {

            const technician = JSON.parse(
                localStorage.getItem("technician")
            );

            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/service-prices/${technician._id}`
            );

            setServices(response.data);

        } catch (error) {

            console.log(error);

        }

    };
    useEffect(() => {

        fetchServices();

    }, []);

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

                    {

                        editId

                            ?

                            "Update Price"

                            :

                            "Save Price"

                    }

                </button>

            </div>

            <div className="table-box">

                <table>

                    <thead>

                        <tr>

                            <th>Appliance</th>

                            <th>Problem</th>

                            <th>Price</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            services.length === 0 ?

                                (
                                    <tr>
                                        <td colSpan="4">
                                            No Service Added Yet
                                        </td>
                                    </tr>
                                )

                                :

                                (
                                    services.map((item, index) => (

                                        <tr key={item._id || index}>

                                            <td>{item.appliance}</td>

                                            <td>{item.problem}</td>

                                            <td>₹{item.price}</td>

                                            <td>

                                                <button
                                                className="edit-btn"

                                                    onClick={() => editService(item)}

                                                >

                                                    Edit

                                                </button>

                                                <button

                                                    className="delete-btn"

                                                    onClick={() => deleteService(item._id)}

                                                >

                                                    Delete

                                                </button>

                                            </td>

                                        </tr>

                                    ))
                                )
                        }

                    </tbody>
                </table>

            </div>

        </div>

    );

}

export default ServicePrices;