import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "../css/login.css";

function TechnicianRegister() {

    const navigate = useNavigate();

    const [technician, setTechnician] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        services: [],
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {

        setTechnician({
            ...technician,
            [e.target.name]: e.target.value
        });

    };

    const handleCheckbox = (e) => {

        const { value, checked } = e.target;

        if (checked) {

            setTechnician({
                ...technician,
                services: [...technician.services, value]
            });

        } else {

            setTechnician({
                ...technician,
                services: technician.services.filter(
                    (item) => item !== value
                )
            });

        }

    };

    async function handleRegister(e) {

        e.preventDefault();

        if (technician.password !== technician.confirmPassword) {

            alert("Password does not match");

            return;

        }

        try {

            const response = await axios.post(
                 `${import.meta.env.VITE_API_URL}/api/technicians/register`,
                {
                    name: technician.name,
                    email: technician.email,
                    phone: technician.phone,
                    city: technician.city,
                    
                    password: technician.password
                }
            );

            alert(response.data.message);

            navigate("/technician-login");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Registration Failed"
            );

        }

    }

    return (
        <div className="login-container">

            <div className="register-page">

                <div className="register-box">

                    <h1>Create Account</h1>

                    <p>Register as Technician</p>

                    <form onSubmit={handleRegister}>

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            onChange={handleChange}
                            required
                        />


                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            onChange={handleChange}
                            required
                        />
                            
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            required
                        />
                        
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            onChange={handleChange}
                            required
                        />


                        <button type="submit">
                            Register
                        </button>

                    </form>

                    <p>

                        Already have an account?

                        <Link to="/technician-login">
                            Login
                        </Link>

                    </p>

                </div>

            </div>

        </div>
    );
}

export default TechnicianRegister;