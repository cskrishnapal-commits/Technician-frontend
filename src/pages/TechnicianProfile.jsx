import { useState, useEffect } from "react";
import axios from "axios";
import "../css/techicianprofile.css";

function TechnicianProfile() {

    const [profile, setProfile] = useState({

        name: "",

        email: "",

        phone: "",

        service: "",

        experience: "",

        city: "",

        address: ""

    });

    useEffect(() => {

        fetchProfile();

    }, []);

    const fetchProfile = async () => {

        try {

            const technician = JSON.parse(
                localStorage.getItem("technician")
            );

            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/technicians/profile/${technician._id}`
            );
            setProfile(response.data);


        }

        catch (error) {

            console.log(error);

            alert("Failed to load profile");

        }

    };

    function handleChange(e) {

        setProfile({

            ...profile,

            [e.target.name]: e.target.value

        });

    }

    const updateProfile = async () => {

        try {

            const technician = JSON.parse(
                localStorage.getItem("technician")
            );

            const response = await axios.put(

                `${import.meta.env.VITE_API_URL}/api/technicians/profile/${technician._id}`,

                {

                    name: profile.name,

                    phone: profile.phone,

                    city: profile.city,

                    experience: profile.experience,

                    service: profile.service,

                    address: profile.address
                    

                }

            );

            localStorage.setItem(

                "technician",

                JSON.stringify(response.data.technician)

            );

            alert(response.data.message);

            fetchProfile();

        }

        catch (error) {

            alert(

                error.response?.data?.message ||

                "Profile Update Failed"

            );

        }

    };

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
                        value={profile.email}
                        readOnly
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
                        name="service"
                        value={profile.service}
                        onChange={handleChange}
                    >

                        <option value="">Select Service</option>

                        <option>AC Repair</option>

                        <option>Refrigerator Repair</option>

                        <option>Washing Machine Repair</option>

                        <option>TV Repair</option>

                        <option>Electrician</option>

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
                        value={profile.address || ""}
                        onChange={handleChange}
                    />

                    <button onClick={updateProfile}>

                        Update Profile

                    </button>

                </div>

                <div className="profile-info">

                    <h2>Account Information</h2>

                    <p>

                        <strong>Technician ID :</strong>

                        {

                            JSON.parse(
                                localStorage.getItem("technician")
                            )?._id

                        }

                    </p>

                    <p>

                        <strong>Status :</strong>

                        Verified

                    </p>

                    <p>

                        <strong>Joined :</strong>

                        Technician Account

                    </p>

                </div>

            </div>

        </div>

    );

}

export default TechnicianProfile;