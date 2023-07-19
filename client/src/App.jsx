import { useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Fonts from "./Components/Fonts/Font";

import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ScholarshipDatabase from "./Pages/ScholarshipDatabase/ScholarshipDatabase";
import Coaching from "./Pages/Coaching/Coaching";
import Blog from "./Pages/Blog/Blog";
import Team from "./Pages/Team/Team";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import { Container } from "react-bootstrap";
import AuthProvider from "./contexts/AuthProvider";
import SuggestedScholarships from "./Pages/ScholarshipDatabase/SuggestedScholarships";
import Signup from "./Pages/Register/Signup";
import PersonalInformation from "./Pages/Register/PersonalInformation";
import CompleteProfile2 from "./Pages/Register/CompleteProfile2";
import Success from "./Pages/Register/Success";
import PrivateRoute from "./Pages/privateRoute/PrivateRoute";
import ForgotPassword from "./Pages/passwordUpdateProfile/ForgotPassword";
import UpdateProfile from "./Pages/passwordUpdateProfile/UpdateProfile";
import Dashboard from "./Pages/dashboard/Dashboard";

function App() {
  return (
    <Container>
      <Fonts />

      <div className="App">
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/register" element={<Register />} /> */}
                <Route path="/scholarships" element={<ScholarshipDatabase />} />
                <Route path="/coaching" element={<Coaching />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/team" element={<Team />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                  path="/suggested-scholarship"
                  element={<SuggestedScholarships />}
                />
                <Route
                  path="/complete-profile/:var1/:var2/suggested-scholarship"
                  element={<SuggestedScholarships />}
                />
                <Route
                  path="/complete-profile/:var1/:var2"
                  element={<CompleteProfile2 />}
                />
                <Route
                  path="personal-information"
                  element={<PersonalInformation />}
                />
                <Route path="/success" element={<Success />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route
                  path="/update-profile"
                  element={
                    <PrivateRoute>
                      <UpdateProfile />
                    </PrivateRoute>
                  }
                />
                <Route
                  exact
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
