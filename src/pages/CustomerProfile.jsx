import "../css/customerprofile.css";

function CustomerProfile() {
  return (
    <div className="profile-page">

      <h1>My Profile</h1>

      <div className="profile-card">

        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="profile"
        />

        <div className="profile-form">

          <label>Full Name</label>
          <input type="text" defaultValue="Rahul Sharma" />

          <label>Email</label>
          <input type="email" defaultValue="rahul@gmail.com" />

          <label>Phone Number</label>
          <input type="text" defaultValue="9876543210" />

          <label>City</label>
          <input type="text" defaultValue="Lucknow" />

          <label>Address</label>
          <textarea defaultValue="Aliganj, Lucknow"></textarea>

          <button>Update Profile</button>

        </div>

        <div className="profile-info">

          <h3>Account Summary</h3>

          <p><strong>Completed Services:</strong> 12</p>

          <p><strong>Total Amount Spent:</strong> ₹2500</p>

          <p><strong>Member Since:</strong> Jan 2026</p>

        </div>

      </div>

    </div>
  );
}

export default CustomerProfile;