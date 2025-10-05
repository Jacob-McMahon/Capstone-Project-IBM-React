// Import necessary modules from React library
import React from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign-Up/Sign_Up';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import DoctorCard from './Components/DoctorCard/DoctorCard';
import AppointmentForm from './Components/AppointmentForm/AppointmentForm';
import Notification from './Components/Notifications/Notifications';



import './App.css';
import ReviewForm from './Components/ReviewForm/ReviewForm';

// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>

          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
            <Route path="/" element={<Landing_Page/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="find-doctor-search" element={<FindDoctorSearch/>} />
            <Route path="/doctor-card" element={<DoctorCard />} />
            <Route path="/appointment-form" element={<AppointmentForm />} />
            <Route path="/review-form" element={<ReviewForm />} />
          </Routes>
          <Notification />
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;