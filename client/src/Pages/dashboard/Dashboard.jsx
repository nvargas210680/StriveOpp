import { useState, useEffect } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import SuggestedScholarships from "../ScholarshipDatabase/SuggestedScholarships";
import ScholarshipDatabase from "../ScholarshipDatabase/ScholarshipDatabase";

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

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <SuggestedScholarships />
      </div>
    </>
  );
};

export default Dashboard;
