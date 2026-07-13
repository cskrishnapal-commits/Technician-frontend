import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import CustomerLogin from "./pages/CustomerLogin";
import CustomerRegister from "./pages/CustomerRegister";

import CustomerDashboard from "./pages/CustomerDashboard";
import CustomerHome from "./pages/CustomerHome";
import FindTechnician from "./pages/FindTechnician";
import CostEstimator from "./pages/CostEstimator";
import CustomerProfile from "./pages/CustomerProfile";

import TechnicianLogin from "./pages/TechnicianLogin";
import TechnicianRegister from "./pages/TechnicianRegister";
import TechnicianDashboard from "./pages/TechnicianDashboard";
import TechnicianSidebar from "./components/TechnicianSiderbar.jsx"
import TechnicianProfile from "./pages/TechnicianProfile";
import TechnicianHome from "./pages/TechnicianHome.jsx"
import ServicePrice from "./pages/ServicePrice.jsx"


function App() {
  return (

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technician-login" element={<TechnicianLogin />} />
        <Route path="/technician-register" element={<TechnicianRegister />} />

        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/customer-register" element={<CustomerRegister />} />
        
        {/* Customer Dashboard (Nested Routing) */}
        <Route path="/customer-dashboard" element={<CustomerDashboard />}>

          <Route index element={<CustomerHome />} />

          <Route
            path="find-technician"
            element={<FindTechnician />}
          />

          <Route
            path="cost-estimator"
            element={<CostEstimator />}
          />

          <Route
            path="profile"
            element={<CustomerProfile />}
          />

        </Route>

        {/* Technician Routes */}
        <Route
    path="/technician-dashboard"
    element={<TechnicianDashboard />}
>

    <Route
        index
        element={<TechnicianHome />}
    />

    <Route
        path="profile"
        element={<TechnicianProfile />}
    />

    <Route
        path="service-prices"
        element={<ServicePrice />}
    />

</Route>
        

      </Routes>
    
  );
}

export default App;