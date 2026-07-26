import { useState, useEffect } from "react";
import axios from "axios";

import CustomerSidebar from "../components/CustomerSidebar";
import "../css/customerprofile.css";

function CustomerProfile() {

  const [profile, setProfile] = useState({

    name: "",

    email: "",

    phone: "",

    city: "",

    address: ""

  });

  const [image, setImage] = useState(

    "https://i.pravatar.cc/150?img=12"

  );

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile = async () => {

    try {

      const customer = JSON.parse(

        localStorage.getItem("customer")

      );

      const response = await axios.get(

        `${import.meta.env.VITE_API_URL}/api/customers/profile/${customer._id}`

      );

      setProfile(response.data);

    }

    catch (error) {

      console.log(error);

      alert("Failed to Load Profile");

    }

  };

  function handleChange(e) {

    setProfile({

      ...profile,

      [e.target.name]: e.target.value

    });

  }

  function handleImageChange(e) {

    const file = e.target.files[0];

    if (file) {

      setImage(

        URL.createObjectURL(file)

      );

    }

  }

  const updateProfile = async () => {

    try {

      const customer = JSON.parse(

        localStorage.getItem("customer")

      );

      const response = await axios.put(

        `${import.meta.env.VITE_API_URL}/api/customers/profile/${customer._id}`,

        {

          name: profile.name,

          phone: profile.phone,

          city: profile.city,

          address: profile.address

        }

      );

      localStorage.setItem(

        "customer",

        JSON.stringify(response.data.customer)

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

    <>

      <CustomerSidebar />

      <div className="customer-profile">

        <h1>My Profile</h1>

        <div className="profile-container">

          <div className="profile-form">

            <div className="profile-image">

              <label htmlFor="profileUpload">

                <img
                  src={image}
                  alt="Profile"
                  className="profile-pic"
                  title="Click to change profile photo"
                />

              </label>

              <input
                id="profileUpload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                hidden
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

            <label>Phone</label>

            <input

              type="text"

              name="phone"

              value={profile.phone}

              onChange={handleChange}

            />

            <label>City</label>

            <input

              type="text"

              name="city"

              value={profile.city || ""}

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

        </div>

      </div>

    </>

  );

}

export default CustomerProfile;