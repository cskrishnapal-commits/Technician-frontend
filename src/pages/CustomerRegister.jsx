import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css/login.css";
import Navbar from "../components/Navbar";
import "../css/navbar.css";
import Footer from "../components/Footer"

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

    function handleSubmit(event) {

        event.preventDefault();

        if (customer.password !== customer.confirmPassword) {

            alert("Passwords do not match");
            return;

        }

        alert("Registration Successful");

        navigate("/customer-login");

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
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
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

                    <button>
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
        <Footer/>
        </>

    );

}

export default CustomerRegister;