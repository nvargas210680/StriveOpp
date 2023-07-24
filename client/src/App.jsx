import { useState } from "react";
import "./App.css";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Fonts from "./Components/Fonts/Font";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/Login/Login";
import ScholarshipDatabase from "./Pages/ScholarshipDatabase/ScholarshipDatabase";
import Coaching from "./Pages/Coaching/Coaching";
import Blog from "./Pages/Blog/Blog";
import Team from "./Pages/Team/Team";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Profile from "./Profiles/User/Profile/Profile";
import Dashboard from "./Pages/dashboard/Dashboard";
import Signup from "./Pages/Register/Signup";
import SuggestedScholarships from "./Pages/ScholarshipDatabase/SuggestedScholarships";
import CompleteProfile2 from "./Pages/Register/CompleteProfile2";
import PersonalInformation from "./Pages/Register/PersonalInformation";
import Success from "./Pages/Register/Success";
import ForgotPassword from "./Pages/passwordUpdateProfile/ForgotPassword";
import UpdateProfile from "./Pages/passwordUpdateProfile/UpdateProfile";
import PrivateRoute from "./Pages/privateRoute/PrivateRoute";
import AuthProvider from "./contexts/AuthProvider";
import UserProfile from "./Pages/userProfile/UserProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Fonts />

      <div className="App">
        {/* <BrowserRouter> */}
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
              <Route path="/register" element={<Signup />} />
              <Route
                path="/login/suggested-scholarship"
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
                path="/personal-information"
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
              <Route path="/user-profile" element={<UserProfile />} />
            </Route>
          </Routes>
        </AuthProvider>
        {/* </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
