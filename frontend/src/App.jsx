import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Content from "./pages/Content";
import Login from "./pages/Login";
import MyAppointment from "./pages/MyAppointment";
import MyProfile from "./pages/MyProfile";
import Appointments from "./pages/Appointments";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/About" element={<About />} />
        <Route path="/content" element={<Content />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myappointment" element={<MyAppointment />} />
        <Route path="/content" element={<Content />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/appointments/:docId" element={<Appointments />} />
      </Routes>
    </div>
  );
};

export default App;
