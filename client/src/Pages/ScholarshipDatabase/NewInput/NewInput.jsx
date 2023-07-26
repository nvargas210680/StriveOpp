import React from "react";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import Button from "@mui/joy/Button";
import Typography from "@mui/material/Typography";
import "./NewInput.css";

const NewInput = () => {
  return (
      <Grid
        style={{ height: "100%" }}
        direction="row"
        align="center"
        justify="center"
      >
        <TextField
          placeholder="Add New Scholarship"
          // onChange={(e) =>
          // setNewScholarship}
        />
        <TextField
          placeholder="Add New Deadline"
          type="date"
          // onChange={(e) =>
          // setNewDeadline}
        />
        <TextField
          placeholder="Add New Requirements"
          // onChange={(e) =>
          // setNewRequirements}
        />
        <TextField placeholder="Add New Tags" onChange={(e) => setNewTags} />
        <Button
        // onClick={onSubmitScholarship}
        >
          Submit Scholarship
        </Button>
      </Grid>
  );
};

export default NewInput;
