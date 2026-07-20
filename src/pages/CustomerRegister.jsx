import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import "../css/login.css";
import "../css/navbar.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CustomerRegister() {

    const navigate = useNavigate();

    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    function handleChange(event) {

        setCustomer({
            ...customer,
            [event.target.name]: event.target.value
        });

    }

    async function handleSubmit(event) {

        event.preventDefault();

        if (customer.password !== customer.confirmPassword) {

            alert("Passwords do not match");
            return;

        }

        try {

            const response = await axios.post(
                 `${import.meta.env.VITE_API_URL}/api/customers/register`,
                {
                    name: customer.name,
                    email: customer.email,
                    phone: customer.phone,
                    password: customer.password
                }
            );

            alert(response.data.message);

            navigate("/customer-login");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Registration Failed"
            );

        }

    }

    return (
        <>
            <Navbar simple={true} />

            <div className="register-page">

                <div className="register-box">

                    <h1>Create Account</h1>

                    <p>Register as Customer</p>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={customer.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={customer.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={customer.phone}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={customer.password}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={customer.confirmPassword}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">
                            Register
                        </button>

                    </form>

                    <p>

                        Already have an account?

                        <Link to="/customer-login">
                            Login
                        </Link>

                    </p>

                </div>

            </div>

            <Footer />

        </>
    );

}

export default CustomerRegister;