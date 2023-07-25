import { useState } from "react";
import { Form, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./PersonalInformation.css";
import Button from "@mui/joy/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const PersonalInformation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/complete-profile/${firstName}/${lastName}`);
  };

  const handleProvinceChange = (e) => {
    try {
      setError("");
      setSelectedProvince(e.target.value);
    } catch {
      setError("Failed to select province");
    }
  };

  return (
    <div className="personalinformation">
      <div className="containerpersonalinformation">
        <div className="personalinformationleft">
          <img className="personalinformation" src="/" />
        </div>
        <div className="personalinformationright">
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
              <Form id="personalinformation-form">
                <Grid item>
                  <TextField
                    style={{ width: 400 }}
                    type="text"
                    value={firstName}
                    required
                    label="First Name"
                    placeholder="First Name"
                    margin="normal"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    style={{ width: 400 }}
                    type="text"
                    value={lastName}
                    required
                    label="Last Name"
                    placeholder="Last Name"
                    margin="normal"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid>

                <Grid item style={{ color: "#294243" }}>
                  <InputLabel
                    style={{ color: "#294243" }}
                    id="selectlabelprovince"
                  >
                    Province of Study
                  </InputLabel>

                  <Select
                    style={{ color: "#294243" }}
                    labelId="selectlabelprovince"
                    id="selectlabelprovince"
                    value={selectedProvince}
                    label="Province"
                    onChange={(e) => handleProvinceChange(e)}
                  >
                    <MenuItem value="alberta" style={{ color: "#294243" }}>
                      Alberta
                    </MenuItem>
                    <MenuItem
                      value="british columbia"
                      style={{ color: "#294243" }}
                    >
                      British Columbia
                    </MenuItem>
                    <MenuItem style={{ color: "#294243" }}>Quebec</MenuItem>
                    <MenuItem style={{ color: "#294243" }}>Manitoba</MenuItem>
                    <MenuItem style={{ color: "#294243" }}>
                      New Brunswick
                    </MenuItem>
                    <MenuItem style={{ color: "#294243" }}>
                      Newfoundland and Labrador
                    </MenuItem>
                    <MenuItem style={{ color: "#294243" }}>
                      Nova Scotia
                    </MenuItem>
                    <MenuItem style={{ color: "#294243" }}>
                      Prince Edward Island
                    </MenuItem>
                    <MenuItem style={{ color: "#294243" }}>
                      Saskatchewan
                    </MenuItem>
                    <MenuItem style={{ color: "#294243" }}>Yukon</MenuItem>
                  </Select>

                  <Button
                    style={{ width: "50%", margin: 20 }}
                    onClick={handleNavigate}
                  >
                    Next Page
                  </Button>
                </Grid>
              </Form>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;

{
  /* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Personal Information</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <input
              id="firstname"
              type="text"
              value={firstName}
              required
              placeholder="Firstname"
              className="form-control my-4"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              id="lastName"
              type="text"
              value={lastName}
              required
              placeholder="LastName"
              className="form-control my-4"
              onChange={(e) => setLastName(e.target.value)}
            />
            <label>Province of Study</label>
            <select onChange={(e) => handleProvinceChange(e)}>
              <option>Alberta</option>
              <option>British Columbia</option>
              <option>Manitoba</option>
              <option>New Brunswick</option>
              <option>Newfoundland and Labrador</option>
              <option>Northwest Territories</option>
              <option>Nova Scotia</option>
              <option>Nunavut</option>
              <option>Ontario</option>
              <option>Prince Edward Island</option>
              <option>Quebec</option>
              <option>Saskatchewan</option>
              <option>Yukon</option>
            </select>
            <Button className="w-100 mt-4" onClick={handleNavigate}>
              Next Page
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div> */
}
