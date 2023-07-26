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
    { field: "demographic", headerName: "Demographic", width: 200 },
    { field: "requirements", headerName: "Requirements", width: 250 },
    { field: "tag", headerName: "Tag", width: 120 },
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
        <Grid>
          <Grid container direction="row">
            <FormControl direction="row" justify="center" sx={{ m: 1 }}>
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
                <MenuItem sx={{ color: "#294243" }} value="communications">
                  Law
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="communications">
                  Linguistics
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="communications">
                  Medicine & Health
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="communications">
                  Nursing
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="communications">
                  Physics
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="communications">
                  Science
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="communications">
                  Social Work
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="communications">
                  Study Abroad / Cultural Exchange
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1 }}>
              <InputLabel id="demo-simple-select-error-label">
                Cultural Identity
              </InputLabel>

              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={culturalIdentityFilter}
                label="Age"
                onChange={handleCulturalIdentityFilterChange}
                renderValue={(value) => `⚠️  - ${value}`}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  White
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Black or African Canadian
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  South Asian
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Indigenous or First Nations
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  East Asian
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Southeast Asian
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Arab
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Latin American
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  West Asian
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid container direction="row" justify="center">
            <FormControl sx={{ m: 1 }}>
              <InputLabel id="demo-simple-select-error-label">
                Industry
              </InputLabel>

              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={industryFilter}
                label="Age"
                onChange={handleIndustryFilterChange}
                renderValue={(value) => `⚠️  - ${value}`}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Agriculture
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Aviation
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Broadcasting
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Creative
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Electrical
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Oil & Gas
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Film
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Finance
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Social Work
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Economics
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Journalism
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1 }}>
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
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Bachelor's Degree
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="high school">
                  High School
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Creative
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1 }}>
              <InputLabel id="demo-simple-select-error-label">
                Marginalized Classes
              </InputLabel>

              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={marginalizedClassesFilter}
                label="Age"
                onChange={handleMarginalizedClassesFilterChange}
                renderValue={(value) => `⚠️  - ${value}`}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Living with a disability
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Mature Students
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  LGBTQ+
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Women Students
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  First-Generation College Students
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Low-Income Household
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Immigrant Student
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid container direction="row" justify="center">
            <FormControl sx={{ m: 1 }}>
              <InputLabel id="demo-simple-select-error-label">
                Athletics
              </InputLabel>

              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={athleticsFilter}
                label="Age"
                onChange={handleAthleticsFilterChange}
                renderValue={(value) => `⚠️  - ${value}`}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Basketball
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Baseball
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  {" "}
                  Soccer{" "}
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  {" "}
                  Football{" "}
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  {" "}
                  Swimming{" "}
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  {" "}
                  Hockey{" "}
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  {" "}
                  Other{" "}
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1 }}>
              <InputLabel id="demo-simple-select-error-label">
                Student Type
              </InputLabel>

              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={studentTypeFilter}
                label="Age"
                onChange={handleStudentTypeFilterChange}
                renderValue={(value) => `⚠️  - ${value}`}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Full-Time
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Part-Time
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid container direction="row" justify="center">
            <FormControl sx={{ m: 1 }}>
              <InputLabel id="demo-simple-select-error-label">GPA</InputLabel>

              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={GPAFilter}
                label="Age"
                onChange={handleGPAFilterChange}
                renderValue={(value) => `⚠️  - ${value}`}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  No Minimum GPA
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  {" "}
                  3.0+{" "}
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  {" "}
                  3.5+{" "}
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  {" "}
                  4.0+{" "}
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1 }}>
              <InputLabel id="demo-simple-select-error-label">Value</InputLabel>

              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={valueFilter}
                label="Age"
                onChange={handleValueFilterChange}
                renderValue={(value) => `⚠️  - ${value}`}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  {" "}
                  Under $500{" "}
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  {" "}
                  $500 - $999{" "}
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  {" "}
                  $999 - $4999{" "}
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  {" "}
                  $5000+{" "}
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1 }}>
              <InputLabel id="demo-simple-select-error-label">
                Disimbursement Schedule
              </InputLabel>

              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={valueFilter}
                label="Age"
                onChange={handleValueFilterChange}
                renderValue={(value) => `⚠️  - ${value}`}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  Annually
                </MenuItem>
                <MenuItem sx={{ color: "#294243" }} value="arts">
                  One-Time
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        </div>

        <div className="containerselecttags">
            <Grid container direction="row">
        
          <DataGrid
            sx={{
              backgroundColor: "#eee",
              height: "500px",
              width: "fit-content",
              m: 5,
            }}
            rows={filteredScholarships}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
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
