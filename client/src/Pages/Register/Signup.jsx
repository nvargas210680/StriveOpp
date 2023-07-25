import { useRef, useState } from "react";
import { Form, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import Button from "@mui/joy/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import Box from "@mui/joy/Box";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    console.log("hello");
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/success");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <div className="signup">
      <div className="containersignup">
        <div className="signupleft">
          <img className="signupleft" src="https://i.imgur.com/8RnOqyk.png" />
        </div>

        <div className="signupright">
          <Typography
            fontFamily="Poppins"
            color="#294243"
            variant="h4"
            align="center"
            gutterBottom
          >
            {"Sign-Up".toUpperCase()}

            {error && <Alert variant="danger">{error}</Alert>}
          </Typography>

          <Grid container direction="column" justify="center">
            <Grid item>
              <Form id="signup-form" onSubmit={handleSubmit}>
                <Grid item>
                  <TextField
                    style={{ width: 400 }}
                    type="email"
                    inputRef={emailRef}
                    required
                    label="Email"
                    placeholder="Email"
                    name="Email"
                    margin="normal"
                  ></TextField>
                </Grid>

                <Grid item>
                  <TextField
                    style={{ width: 400 }}
                    type="password"
                    inputRef={passwordRef}
                    required
                    label="Password"
                    placeholder="Password"
                    name="password"
                    margin="normal"
                  ></TextField>
                </Grid>

                <Grid item>
                  <TextField
                    style={{ width: 400 }}
                    type="password"
                    inputRef={passwordConfirmRef}
                    required
                    label="Confirm your password"
                    placeholder="Confirm your password"
                    name="Confirm your password"
                    margin="normal"
                  ></TextField>
                </Grid>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    "& > button": { flex: 1 },
                    width: "80%",
                    marginTop: "10px",
                  }}
                >
                  <Button sx={{ bgcolor: "#294243" }}>Reset</Button>

                  <Button type="link" sx={{ bgcolor: "#294243" }}>
                    Next Page
                  </Button>
                </Box>

                <div className="signupquestion">
                  Already have an account? <Link to="/login">Log In</Link>
                </div>
              </Form>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
    // <>
    //   <Card>
    //     <Card.Body>
    //       <h2 className="text-center mb-4">Sign Up</h2>
    //       {error && <Alert variant="danger">{error}</Alert>}
    //       <Form onSubmit={handleSubmit}>
    //         <input
    //           id="email"
    //           type="email"
    //           ref={emailRef}
    //           required
    //           placeholder="Email"
    //           className="form-control my-4"
    //         />
    //         <input
    //           id="password"
    //           type="password"
    //           ref={passwordRef}
    //           required
    //           placeholder="Password"
    //           className="form-control my-4"
    //         />
    //         <input
    //           id="password-confirm"
    //           type="password"
    //           ref={passwordConfirmRef}
    //           required
    //           placeholder="Confirm your password"
    //           className="form-control my-4"
    //         />
    //         <Button
    //           disabled={loading}
    //           className="w-100 mt-4"
    //           onClick={handleSubmit}
    //           type="submit"
    //         >
    //           Next Page
    //         </Button>
    //       </Form>
    //     </Card.Body>
    //   </Card>
    //   <div className="w-100 text-center mt-2">
    //     Already have an account? <Link to="/login">Log In</Link>
    //   </div>
    // </>
  );
};

export default Signup;
