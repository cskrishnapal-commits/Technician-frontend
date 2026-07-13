import { useState } from "react";
import "../css/techicianprofile.css";

function TechnicianProfile() {

    const [profile, setProfile] = useState({

        name: "Rahul Sharma",

        email: "rahul@gmail.com",

        phone: "9876543210",

        field: "AC Technician",

        experience: "5 Years",

        city: "Kanpur",

        address: "Govind Nagar, Kanpur"

    });

    function handleChange(e) {

        setProfile({

            ...profile,

            [e.target.name]: e.target.value

        });

    }

    function updateProfile() {

        alert("Profile Updated Successfully");

    }

    return (

        <div className="technician-profile">

            <h1>My Profile</h1>

            <div className="profile-container">

                <div className="profile-form">

                    <div className="profile-image">

                        <img
                            src="https://i.pravatar.cc/150?img=12"
                            alt="Profile"
                        />

                    </div>

                    <label>Full Name</label>

                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                    />

                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                    />

                    <label>Phone Number</label>

                    <input
                        type="text"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                    />

                    <label>Work Field</label>

                    <select
                        name="field"
                        value={profile.field}
                        onChange={handleChange}
                    >

                        <option>AC Technician</option>

                        <option>Refrigerator Technician</option>

                        <option>Cooler Technician</option>

                        <option>Washing Machine Technician</option>

                    </select>

                    <label>Experience</label>

                    <input
                        type="text"
                        name="experience"
                        value={profile.experience}
                        onChange={handleChange}
                    />

                    <label>City</label>

                    <input
                        type="text"
                        name="city"
                        value={profile.city}
                        onChange={handleChange}
                    />

                    <label>Address</label>

                    <textarea
                        name="address"
                        value={profile.address}
                        onChange={handleChange}
                    />

                    <button onClick={updateProfile}>

                        Update Profile

                    </button>

                </div>

                <div className="profile-info">

                    <h2>Account Information</h2>

                    <p><strong>Technician ID :</strong> TEC1001</p>

                    <p><strong>Status :</strong> Verified</p>

                    <p><strong>Joined :</strong> January 2026</p>

                </div>

            </div>

        </div>

    );

}

export default TechnicianProfile;