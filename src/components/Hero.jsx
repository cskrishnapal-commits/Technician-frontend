import { Link } from "react-router-dom";
import technicianImage from "../images/tech_image.jpg";

import "../css/home.css";

function Hero() {

    return (

        <section className="hero">

            <div className="hero-left">

                <h1>Technician</h1>

                <h3>

                    Nearby Technician Finder & Cost Estimator

                </h3>

                <p>

                    Find trusted and experienced technicians in your nearby
                    area for AC, Refrigerator and other home appliances.

                </p>

                <div className="buttons">

                    <Link to="/customer-login">

                        <button className="customer">

                            Customer Login

                        </button>

                    </Link>

                    <Link to="/technician-login">

                        <button className="technician">

                            Technician Login

                        </button>

                    </Link>

                </div>

            </div>

            <div className="hero-right">

                <img
                    src={technicianImage}
                    alt="Technician"
                />

            </div>

        </section>

    );

}

export default Hero;