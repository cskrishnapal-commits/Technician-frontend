import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";



function TechnicianRegister() {

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
 const handleRegister = (e) => {

    e.preventDefault();

    if (technician.password !== technician.confirmPassword) {
      alert("Password does not match");
      return;
    }

    alert("Technician Registered Successfully");

    navigate("/technician-login");
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

  return (
    <>
    
   < div className="login-container">
    <div className="register-page">

      <div className="register-box">

        <h1>Create Account </h1>
        <p> Regrister as Technician</p>

        <form  onSubmit={handleRegister}>

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
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
            required
          />
<div className="checkbox-group">
    <label> SELECT PROFESSION </label>
    
  <label >
    <input
      type="checkbox"
      value="AC Repair"
      onChange={handleCheckbox}
    />
    AC Repair
  </label>

  <label>
    <input
      type="checkbox"
      value="Refrigerator Repair"
      onChange={handleCheckbox}
    />
    Refrigerator Repair
  </label>

  <label>
    <input
      type="checkbox"
      value="Washing Machine Repair"
      onChange={handleCheckbox}
    />
    Washing Machine Repair
  </label>

  <label>
    <input
      type="checkbox"
      value="TV Repair"
      onChange={handleCheckbox}
    />
    TV Repair
  </label>

  <label>
    <input
      type="checkbox"
      value="Electrician"
      onChange={handleCheckbox}
    />
    Electrician
  </label>

</div>

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
  
    </>
  );
}

export default TechnicianRegister;