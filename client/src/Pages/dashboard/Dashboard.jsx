import { useState, useEffect } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import UserProfile from "../userProfile/UserProfile";
import SuggestedScholarships from "../ScholarshipDatabase/SuggestedScholarships";
import { Box } from "@mui/material";
import "./dashboard.css";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser && !currentUser.email) {
      setError("No email found for the current user.");
    } else {
      setError("");
    }
  }, [currentUser]);

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  };

  const handleProfile = () => {
    navigate("/update-profile");
  }

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="containerUserProfile">
        
        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            "& > button": { flex: 1 },
            width: "80%",
            height: "80%",
            marginTop: "5px",
          }}
        >
          <UserProfile />
      <div>
  
          <Button sx={{ bgcolor: "#294243", gap:"5px"}} onClick={handleProfile}>Update Profile</Button>
      </div>
      <div className="w-100 text-center mt-2">
    
        <Button sx={{ bgcolor: "#294243", gap:"5px" }} variant="link" onClick={handleLogout}>
          Log Out
        </Button>
  
      </div>
        </Box>
        <div></div>
      </div>
      <div>
        <SuggestedScholarships />
      </div>

    </>
  );
};

export default Dashboard;
