import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import "./TagInput.css";
import { db } from "../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import NewInput from "../NewInput/NewInput";

export default function SelectTags() {
  const columns = [
    { field: "scholarship", headerName: "Scholarship", width: 200 },
    { field: "deadline", headerName: "Deadline", width: 150 },
    { field: "value", headerName: "Value", width: 120 },
    { field: "requirements", headerName: "Requirements", width: 250 },
    { field: "tag", headerName: "Tag", width: 300 },
    { field: "url", headerName: "URL", width: 200 },
  ];
  const [rows, setRows] = useState([]);
  const [scholarships, setScholarships] = useState([]);
  const [filteredScholarships, setFilteredScholarships] = useState([]);
  const [educationFilter, setEducationFilter] = useState("");
  const [demographicFilter, setDemographicFilter] = useState("all");
  const [studiesFilter, setStudiesFilter] = useState("");
  const [culturalIdentityFilter, setCulturalIdentityFilter] = useState("");
  const [marginalizedClassesFilter, setMarginalizedClassesFilter] =
    useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [athleticsFilter, setAthleticsFilter] = useState("");
  const [studentTypeFilter, setStudentTypeFilter] = useState("");
  const [valueFilter, setValueFilter] = useState("");
  const [requirementsFilter, setRequirementsFilter] = useState("");
  const [miscFilter, setMiscFilter] = useState("");
  const [disimbursementFilter, setDisimbursementFilter] = useState("");
  const [GPAFilter, setGPAFilter] = useState("");

  useEffect(() => {
    const getScholarships = async () => {
      const schoolCollectionRef = collection(db, "scholarships2");
      const querySnapshot = await getDocs(schoolCollectionRef);
      const scholarshipData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setScholarships(scholarshipData);
      setFilteredScholarships(scholarshipData);
    };
    getScholarships();
  }, []);

  const handleEducationFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    setEducationFilter(filterValue);
  };

  const handleStudiesFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    setStudiesFilter(filterValue);
  };

  const handleCulturalIdentityFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    setCulturalIdentityFilter(filterValue);
  };

  const handleMarginalizedClassesFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    setMarginalizedClassesFilter(filterValue);
  };

  const handleIndustryFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    setIndustryFilter(filterValue);
  };

  const handleAthleticsFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    setAthleticsFilter(filterValue);
  };
  const handleStudentTypeFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    setStudentTypeFilter(filterValue);
  };

  const handleValueFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    setValueFilter(filterValue);
  };

  const handleRequirementsFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    setRequirementsFilter(filterValue);
  };

  const handleGPAFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    setGPAFilter(filterValue);
  };

  const handleMiscellaneousFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    setMiscellaneousFilter(filterValue);
  };

  const handleDisimbursementFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    setDisimbursementFilter(filterValue);
  };

  const applyFilters = () => {
    console.log("hello");
    const filteredData = scholarships.filter((scholarship) => {
      const educationMatch =
        scholarship.tag &&
        scholarship.tag.toLowerCase().includes(educationFilter);
      const disimbursementMatch =
        scholarship.tag &&
        scholarship.tag.toLowerCase().includes(disimbursementFilter);
      const valueMatch =
        scholarship.tag && scholarship.tag.toLowerCase().includes(valueFilter);
      const miscMatch =
        scholarship.tag && scholarship.tag.toLowerCase().includes(miscFilter);
      const GPAMatch =
        scholarship.tag && scholarship.tag.toLowerCase().includes(GPAFilter);
      const requirementsMatch =
        scholarship.tag &&
        scholarship.tag.toLowerCase().includes(requirementsFilter);
      const studentTypeMatch =
        scholarship.tag &&
        scholarship.tag.toLowerCase().includes(studentTypeFilter);
      const athleticsMatch =
        scholarship.tag &&
        scholarship.tag.toLowerCase().includes(athleticsFilter);
      const industryMatch =
        scholarship.tag &&
        scholarship.tag.toLowerCase().includes(industryFilter);
      const marginalizedClassesMatch =
        scholarship.tag &&
        scholarship.tag.toLowerCase().includes(marginalizedClassesFilter);
      const culturalIdentityMatch =
        scholarship.tag &&
        scholarship.tag.toLowerCase().includes(culturalIdentityFilter);
      const studiesMatch =
        scholarship.tag &&
        scholarship.tag.toLowerCase().includes(studiesFilter);

      return (
        educationMatch &&
        disimbursementMatch &&
        valueMatch &&
        miscMatch &&
        GPAMatch &&
        requirementsMatch &&
        studentTypeMatch &&
        athleticsMatch &&
        industryMatch &&
        marginalizedClassesMatch &&
        culturalIdentityMatch &&
        studiesMatch
      );
    });
    setFilteredScholarships(filteredData);
  };

  useEffect(applyFilters, [
    educationFilter,
    disimbursementFilter,
    valueFilter,
    miscFilter,
    GPAFilter,
    requirementsFilter,
    studentTypeFilter,
    athleticsFilter,
    industryFilter,
    marginalizedClassesFilter,
    culturalIdentityFilter,
    studiesFilter,
  ]);

  return (
    <div className="selecttag">
      {/* https://mui.com/material-ui/react-select/ */}
      <div className="containerselecttags">
        <div className="containerselecttagsleft">
            <img className="taginput "src="https://i.imgur.com/4X6bqaO.png" />
        </div>
        <div className="right">
        <Grid>
          <Grid container direction="row">
            <FormControl direction="row" justify="center" sx={{ m: 1, width:"250px" }}>
              <InputLabel id="simple-select-label">Field of Studies</InputLabel>

              <Select
                display="flex"
                direction="row"
                labelId="demo-simple-select-disabled-label"
                id="demo-simple-select-disabled"
                value={studiesFilter}
                label="fieldofstudies"
                onChange={handleStudiesFilterChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="humanities">
                  Arts & Humanities
                </MenuItem>
                <MenuItem
                  sx={{ color: "#294243" }}
                  value="business administration and management"
                >
                  Business Administration and Management
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="communications">
                  Communication
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="economics">
                  Economics
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="education">
                  Education
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="engineering">
                  Engineering
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="fine arts">
                  Fine Arts
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="history">
                  History
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="journalism">
                  Journalism
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="law">
                  Law
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="linguistics">
                  Linguistics
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="medicine">
                  Medicine & Health
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="nursing">
                  Nursing
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="physics">
                  Physics
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="science">
                  Science
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="social work">
                  Social Work
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="study abroad">
                  Study Abroad / Cultural Exchange
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width:"250px" }}>
              <InputLabel id="demo-simple-select-error-label">
                Cultural Identity
              </InputLabel>

              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={culturalIdentityFilter}
                label="cultural-identity"
                onChange={handleCulturalIdentityFilterChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="white">
                  White
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="black">
                  Black or African Canadian
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="south asian">
                  South Asian
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="indigenous">
                  Indigenous or First Nations
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="east asian">
                  East Asian
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="southeast asian">
                  Southeast Asian
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arab">
                  Arab
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="latin american">
                  Latin American
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="west asian">
                  West Asian
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid container direction="row" justify="center">
            <FormControl sx={{ m: 1, width:"250px" }}>
              <InputLabel id="demo-simple-select-error-label">
                Industry
              </InputLabel>

              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={industryFilter}
                label="Age"
                onChange={handleIndustryFilterChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="agriculture">
                  Agriculture
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="aviation">
                  Aviation
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="broadcasting">
                  Broadcasting
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="creative">
                  Creative
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="electrical">
                  Electrical
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="oil">
                  Oil & Gas
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="film">
                  Film
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="finance">
                  Finance
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="social work">
                  Social Work
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="economic">
                  Economics
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="journalism">
                  Journalism
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width:"250px" }}>
              <InputLabel id="demo-simple-select-error-label">
                Educational Level
              </InputLabel>

              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                label="Educational Level"
                value={educationFilter}
                onChange={handleEducationFilterChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                <MenuItem sx={{ color: "#294243" }} value="masters">
                  Master's Degree
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="bachelors">
                  Bachelor's Degree
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="high school">
                  High School
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="phd">
                  Ph.D
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width:"250px" }}>
              <InputLabel id="demo-simple-select-error-label">
                Marginalized Classes
              </InputLabel>

              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={marginalizedClassesFilter}
                label="Age"
                onChange={handleMarginalizedClassesFilterChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="disability">
                  Living with a disability
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="mature">
                  Mature Students
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="lgbtq">
                  LGBTQ+
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="women">
                  Women Students
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="first-gen">
                  First-Generation College Students
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="low-income">
                  Low-Income Household
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="immigrant">
                  Immigrant Student
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="domestic">
                  Domestic Student
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="international">
                  International Student
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid container direction="row" justify="center">
            <FormControl sx={{ m: 1, width:"250px" }}>
              <InputLabel id="demo-simple-select-error-label">
                Athletics
              </InputLabel>

              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={athleticsFilter}
                label="Age"
                onChange={handleAthleticsFilterChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="basketball">
                  Basketball
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="baseball">
                  Baseball
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="soccer">
                  Soccer
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="football">
                  Football
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="swimming">
                  Swimming
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="hockey">
                  Hockey
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="other">
                  Other
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width:"250px" }}>
              <InputLabel id="demo-simple-select-error-label">
                Student Type
              </InputLabel>

              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={studentTypeFilter}
                label="Age"
                onChange={handleStudentTypeFilterChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="full-time">
                  Full-Time
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="part-time">
                  Part-Time
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid container direction="row" justify="center">
            <FormControl sx={{ m: 1, width:"250px" }}>
              <InputLabel id="demo-simple-select-error-label">GPA</InputLabel>

              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={GPAFilter}
                label="GPA"
                onChange={handleGPAFilterChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="no minimum gpa">
                  No Minimum GPA
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="3.0">
                  {" "}
                  3.0+{" "}
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="3.5+">
                  {" "}
                  3.5+{" "}
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="4.0+">
                  {" "}
                  4.0+{" "}
                </MenuItem>
              </Select>
            </FormControl>

            {/* <FormControl sx={{ m: 1, width:"200px" }}>
              <InputLabel id="demo-simple-select-error-label">Value</InputLabel>

              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={valueFilter}
                label="value"
                onChange={handleValueFilterChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="under 500">
                  {" "}
                  Under $500{" "}
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="500 to 999">
                  {" "}
                  $500 - $999{" "}
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="999 to 4999">
                  {" "}
                  $999 - $4999{" "}
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="5000 plus">
                  {" "}
                  $5000+{" "}
                </MenuItem>
              </Select>
            </FormControl> */}

            <FormControl sx={{ m: 1, width:"250px" }}>
              <InputLabel id="demo-simple-select-error-label">
                Disimbursement Schedule
              </InputLabel>

              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={valueFilter}
                label="value"
                onChange={handleValueFilterChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem sx={{ color: "#294243"}} value="annually">
                  Annually
                </MenuItem>
                <MenuItem sx={{ color: "#294243"}} value="one-time">
                  One-Time
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
      </div>

      <div className="containerselecttags">
        <Grid container direction="row">
          <DataGrid
            sx={{
              backgroundColor: "#eee",
              height: "600px",
              width: "fit-content",
              m: 5,
            }}
            rows={filteredScholarships}
            columns={columns}
            // slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
          />
        </Grid>
      </div>

      <div className="containerselecttags">
        <Grid>
          <NewInput />
        </Grid>
      </div>
    </div>
  );
}
