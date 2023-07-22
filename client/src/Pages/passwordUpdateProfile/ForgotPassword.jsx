import { useRef, useState } from "react";
import { Form, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";
import Button from '@mui/joy/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { TextField } from "@mui/material";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instruction");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  };

  return (
    <div className="forgotpassword">
      <div className="containerforgotpassword">
        <div className="forgotpasswordleft">
          <img className="forgotpassword" src="https://i.imgur.com/qAOjfum.png"/>
        </div>

        <div className="forgotpasswordright">
          <Typography
            fontFamily="Poppins"
            color="#294243"
            variant="h4"
            align="center"
            gutterBottom>
              {'Forgot Password?'.toUpperCase()}
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="Success">{message}</Alert>}
          </Typography>

          <Grid
            container direction="column"
            justify="center">
              <Grid item>
                <Form 
                  id="forgotpassword-form"
                  onSubmit={handleSubmit}>
                    <Grid item>
                      <TextField 
                        style={{width:400}}
                        type="email"
                        ref={emailRef}
                        required
                        label="Email"
                        placeholder="Email"
                        name="Email"
                        margin="normal">
                      </TextField>

                      <Grid item
                        style={{alignItems:"center"}}>
                        <Button
                          style={{width:"50%", alignItems:"center"}}>
                          Reset Password
                        </Button>
                      </Grid>
                    </Grid>
                    <div className="forgotpasswordquestion">
                      Already have an account? <Link to="/login">Log In</Link>
                    </div>

                    <div className="forgotpasswordquestion">
                      Need an account? <Link to="/signup">Sign Up</Link>
                    </div>
                </Form>
              </Grid>
          </Grid>
        </div>
      </div>
    </div>

    );
  };
    
export default ForgotPassword;

      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="Success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <input
              id="email"
              type="email"
              ref={emailRef}
              required
              placeholder="Email"
              className="form-control my-4"
            />
            <Button disabled={loading} className="w-100 mt-4" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to="/login">Log In</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div> */}

