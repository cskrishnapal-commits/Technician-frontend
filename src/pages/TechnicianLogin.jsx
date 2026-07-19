import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import "../css/login.css";
import Navbar from "../components/Navbar";
import "../css/navbar.css";
import Footer from "../components/Footer";

function TechnicianLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    async function handleLogin(e) {

        e.preventDefault();

        if (email === "" || password === "") {

            alert("Please fill all fields");

            return;

        }

        try {

            const response = await axios.post(
                "http://localhost:5000/api/technicians/login",
                {
                    email,
                    password
                }
            );

            localStorage.setItem(
                "technicianToken",
                response.data.token
            );

            localStorage.setItem(
                "technician",
                JSON.stringify(
                    response.data.technician
                )
            );

            alert(response.data.message);

            navigate("/technician-dashboard");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Login Failed"
            );

        }

    }

    return (
        <>
            <Navbar simple={true} />

            <div className="login-container">

                <form
                    className="login-box"
                    onSubmit={handleLogin}
                >

                    <h1>Technician Login</h1>

                    <p>Welcome Back</p>

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    <button type="submit">
                        Login
                    </button>

                    <p className="register">

                        Don't have an account?

                        <Link to="/technician-register">
                            Register
                        </Link>

                    </p>

                </form>

            </div>

            <Footer />

        </>
    );

}

export default TechnicianLogin;