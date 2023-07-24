import { useRef, useState, useEffect } from "react";
import Button from "@mui/joy/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from '@mui/joy/Box';
import { TextField } from "@mui/material";
import { Form, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  collection,
  getDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import "./Login.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [matchedScholarships, setMatchedScholarships] = useState([]);
  const navigate = useNavigate();
  const { var1, var2 } = useParams();

  const handleUserData = async () => {
    try {
      const userProfileRef = doc(db, "user_profile", currentUser.uid);
      const userProfileDoc = await getDoc(userProfileRef);

      if (userProfileDoc.exists()) {
        const userProfileData = userProfileDoc.data();
        console.log("User data retrieved:", userProfileData);

        // Find collection based on selected tags
        const q = query(
          collection(db, "scholarships2"),
          where("tag", "in", userProfileData.tags)
        );

        const querySnapshot = await getDocs(q);

        const matchedScholarships = [];
        querySnapshot.forEach((doc) => {
          const scholarshipData = doc.data();
          matchedScholarships.push(scholarshipData);
        });

        setMatchedScholarships(matchedScholarships);
      }

      navigate("suggested-scholarship");
    } catch (error) {
      console.error("Error retrieving user data from Firebase:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      handleUserData();
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  };

  return (
    <div className="login">
      <div className="containerlogin">
        <div className="loginleft">
          <img className="loginleft" src="https://i.imgur.com/K1E8Kex.png" />
        </div>

        <div className="loginright">
          <Typography
            fontFamily="Poppins"
            color="#294243"
            variant="h4"
            align="center"
            gutterBottom
          >
            {"Login".toUpperCase()}

            {error && <Alert variant="danger">{error}</Alert>}
          </Typography>

          <Grid container direction="column" justify="center" alignItems="center">
            <Grid item>
              <Form id="login-form" onSubmit={handleSubmit}>
                <Grid item>
                  <TextField
                    style={{ width: 400 }}
                    type="email"
                    ref={emailRef}
                    label="Email"
                    placeholder="Email"
                    name="Email"
                    margin="normal"
                    justify="center"
                    alignItems="center"
                  ></TextField>
                </Grid>

                <Grid item>
                  <TextField
                    style={{ width: 400 }}
                    type="password"
                    ref={passwordRef}
                    label="Password"
                    placeholder="Password"
                    name="password"
                    margin="normal"
                  ></TextField>
                </Grid>


                <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 }, width:'80%', marginTop:"10px"}}>
                      <Button
                      sx={{ bgcolor: "#294243", gap:"5px" }}>Reset</Button>
                    
                      <Button 
                      sx={{ bgcolor: "#294243", gap:"5px" }}
                      type="submit">
                        Submit
                      </Button>
                  </Box>

                  <div className="loginquestion">
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </div>

                  <div className="loginquestion">
                    Need an account? <Link to="/signup">Sign Up</Link>
                  </div>
                
              </Form>
            </Grid>
          </Grid>
        </div>

        {/* {matchedScholarships.length > 0 && (
              <div className="matchedscholarships">
                <h3>Matched Scholarships:</h3>
                  <ul>
                    {matchedScholarships.map((scholarship) => (
                    <li key={scholarship.id}>{scholarship.title}</li>
                    ))}
                  </ul>
              </div> */}
      </div>
    </div>

    //       <Card>
    //         <Card.Body>
    //           <h2 className="text-center mb-4">Log In</h2>
    //           {error && <Alert variant="danger">{error}</Alert>}
    //           <Form onSubmit={handleSubmit}>
    //             <input
    //               id="email"
    //               type="email"
    //               ref={emailRef}
    //               required
    //               placeholder="Email"
    //               className="form-control my-4"
    //             />
    //             <input
    //               id="password"
    //               type="password"
    //               ref={passwordRef}
    //               required
    //               placeholder="Password"
    //               className="form-control my-4"
    //             />
    //             <Button
    //               disabled={loading}
    //               w="40%"
    //               className="w-100 mt-4"
    //               type="submit">
    //               Sign In
    //             </Button>
    //           </Form>
    //           <div className="w-100 text-center mt-3">
    //             <Link to="/forgot-password">Forgot Password?</Link>
    //           </div>
    //         </Card.Body>
    //       </Card>
    //       <div className="w-100 text-center mt-2">
    //         Need an account? <Link to="/signup">Sign Up</Link>
    //       </div>
    //       {matchedScholarships.length > 0 && (
    //         <div>
    //           <h3>Matched Scholarships:</h3>
    //           <ul>
    //             {matchedScholarships.map((scholarship) => (
    //               <li key={scholarship.id}>{scholarship.title}</li>
    //             ))}
    //           </ul>
    //         </div>
    //       )}
    //     </>
  );
};

export default Login;
