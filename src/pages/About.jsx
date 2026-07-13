import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../css/about.css";

function About() {
  return (
    <>
    < Navbar/>
    <div className="about">

      <div className="about-container">

        <h1>About Technician Finder</h1>

        <p>
          Technician Finder is a web application developed to help customers
          find trusted technicians in their nearby area for repairing home
          appliances like AC, Refrigerator, Washing Machine, TV and more.
        </p>

        <p>
          Customers can search technicians according to their location,
          compare repair charges and choose the most suitable technician.
          Technicians can register themselves, manage their profile and
          update service charges for different repair problems.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <h3>🎯 Our Mission</h3>

            <p>
              To make finding reliable technicians easy, fast and affordable
              for every customer.
            </p>

          </div>

          <div className="about-card">
            <h3>⚡ Our Vision</h3>

            <p>
              To create a trusted platform where customers and technicians
              can connect without any difficulty.
            </p>

          </div>

          <div className="about-card">
            <h3>🛠 Services</h3>

            <ul>
              <li>AC Repair</li>

             <li>Refrigerator Repair</li>
             
              <li>Washing Machine Repair</li>
              
            </ul>

          </div>

        </div>

      </div>

    </div>
    <Footer/>
    </>
  );
}

export default About;