import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../css/login.css";
import Navbar from "../components/Navbar";
import "../css/navbar.css";
import Footer from "../components/Footer";
import axios from "axios";

function CustomerLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   async function handleLogin(e){

    e.preventDefault();

    if(email==="" || password===""){

        alert("Please fill all fields");

        return;

    }

    try{

        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/api/customers/login`,
            {
                email,
                password
            }
        );

        localStorage.setItem(
            "customerToken",
            response.data.token
        );

        localStorage.setItem(
            "customer",
            JSON.stringify(response.data.customer)
        );

        alert(response.data.message);

        navigate("/customer-dashboard");

    }

    catch(error){

        alert(
            error.response?.data?.message ||
            "Login Failed"
        );

    }

}
    return (
        <>
            <Navbar />

            <div className="login-container">

                <form className="login-box" onSubmit={handleLogin}>

                    <h1>Customer Login</h1>

                    <p>Welcome Back</p>

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button>
                        Login
                    </button>

                    <p className="register">

                        Don't have an account?

                        <Link to="/customer-register">
                            Register
                        </Link>

                    </p>

                </form>

            </div>

            <Footer />
        </>
    );

}

export default CustomerLogin;