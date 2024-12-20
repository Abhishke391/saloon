import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Login from "./pages/Login";
import MyAppointment from "./pages/MyAppointment";
import MyProfile from "./pages/MyProfile";
import Appointments from "./pages/Appointments";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors/:speciality?" element={<Doctors />} />
        <Route path="/About" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myappointment" element={<MyAppointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/appointment/:docId?" element={<Appointments />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
