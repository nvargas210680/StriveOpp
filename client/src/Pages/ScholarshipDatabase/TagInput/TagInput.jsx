import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from "@mui/material/Grid";
import "./TagInput.css"

export default function SelectTags() {

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="selecttag">
        <div className="containerselecttags">
    <Grid container direction="row">
      <FormControl
        direction="row"
        justify="center" 
        sx={{ m: 1 }}>
            <InputLabel id="simple-select-label">
                Field of Studies
            </InputLabel>

            <Select
                display="flex"
                direction="row"
                labelId="demo-simple-select-disabled-label"
                id="demo-simple-select-disabled"
                // value={age}
                label="fieldofstudies"
                onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Arts (Humanities)</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="business administration and management">Business Administration and Management</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="communications">Communication</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="economics">Economics</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="engineering">Engineering</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="fine arts">Fine Arts</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="history">History</MenuItem>
                    <MenuItem sx={{color:"#294243"}}value="communications">Journalism</MenuItem>
                    <MenuItem sx={{color:"#294243"}}value="communications">Law</MenuItem>
                    <MenuItem sx={{color:"#294243"}}value="communications">Linguistics</MenuItem>
                    <MenuItem sx={{color:"#294243"}}value="communications">Medicine & Health</MenuItem>
                    <MenuItem sx={{color:"#294243"}}value="communications">Nursing</MenuItem>
                    <MenuItem sx={{color:"#294243"}}value="communications">Physics</MenuItem>
                    <MenuItem sx={{color:"#294243"}}value="communications">Science</MenuItem>
                    <MenuItem sx={{color:"#294243"}}value="communications">Social Work</MenuItem>
                    <MenuItem sx={{color:"#294243"}}value="communications">Study Abroad / Cultural Exchange</MenuItem>
            </Select>
        </FormControl>
    
        <FormControl sx={{ m: 1 }}>
            <InputLabel id="demo-simple-select-error-label">
                Cultural Identity
            </InputLabel>

            <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                // value={age}
                label="Age"
                onChange={handleChange}
                renderValue={(value) => `⚠️  - ${value}`}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">White</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Black or African Canadian</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">South Asian</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Indigenous or First Nations</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">East Asian</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Southeast Asian</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Arab</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Latin American</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">West Asian</MenuItem>
            </Select>
        </FormControl>
        </Grid>

        <Grid
            direction="row"
            justify="center">

        <FormControl sx={{ m: 1 }}>
            <InputLabel id="demo-simple-select-error-label">
                Industry
            </InputLabel>

            <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                // value={age}
                label="Age"
                onChange={handleChange}
                renderValue={(value) => `⚠️  - ${value}`}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Agriculture</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Aviation</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Broadcasting</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Creative</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Electrical</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Oil & Gas</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Film</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Finance</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Social Work</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Economics</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Journalism</MenuItem>
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
                // value={tagFilter}
                // onChange={handleTagFilterChange}
                renderValue={(value) => `⚠️  - ${value}`}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>

                    <MenuItem sx={{color:"#294243"}} value="arts">Agriculture</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Aviation</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Broadcasting</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Creative</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Electrical</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Oil & Gas</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Film</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Finance</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Social Work</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Economics</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Journalism</MenuItem>
            </Select>
        </FormControl>

        <FormControl sx={{ m: 1 }}>
            <InputLabel id="demo-simple-select-error-label">
                Marginalized Classes
            </InputLabel>

            <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                // value={age}
                label="Age"
                onChange={handleChange}
                renderValue={(value) => `⚠️  - ${value}`}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Living with a disability</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Mature Students</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">LGBTQ+</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Women Students</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">First-Generation College Students</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Low-Income Household</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Immigrant Student</MenuItem>
            </Select>
        </FormControl>
        </Grid>

        <Grid
            direction="row"
            justify="center" >

        <FormControl sx={{ m: 1 }}>
            <InputLabel id="demo-simple-select-error-label">
                Athletics
            </InputLabel>

            <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                // value={age}
                label="Age"
                onChange={handleChange}
                renderValue={(value) => `⚠️  - ${value}`}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Basketball</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Baseball</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts"> Soccer </MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts"> Football </MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts"> Swimming </MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts"> Hockey </MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts"> Other </MenuItem>
            </Select>
        </FormControl>

        <FormControl sx={{ m: 1 }}>
            <InputLabel id="demo-simple-select-error-label">
                Student Type
            </InputLabel>

            <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                // value={age}
                label="Age"
                onChange={handleChange}
                renderValue={(value) => `⚠️  - ${value}`}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Full-Time</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Part-Time</MenuItem>
            </Select>
        </FormControl>

        </Grid>
        <Grid
            direction="row"
            justify="center">

        <FormControl sx={{ m: 1 }}>
            <InputLabel id="demo-simple-select-error-label">
                GPA
            </InputLabel>

            <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                // value={age}
                label="Age"
                onChange={handleChange}
                renderValue={(value) => `⚠️  - ${value}`}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">No Minimum GPA</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts"> 3.0+ </MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts"> 3.5+ </MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts"> 4.0+ </MenuItem>
            </Select>
        </FormControl>

        <FormControl sx={{ m: 1 }}>
            <InputLabel id="demo-simple-select-error-label">
                Value
            </InputLabel>

            <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                // value={age}
                label="Age"
                onChange={handleChange}
                renderValue={(value) => `⚠️  - ${value}`}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts"> Under $500 </MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts"> $500 - $999 </MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts"> $999 - $4999 </MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts"> $5000+ </MenuItem>
            </Select>
        </FormControl>

        <FormControl sx={{ m: 1 }}>
            <InputLabel id="demo-simple-select-error-label">
                Disimbursement Schedule
            </InputLabel>

            <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                // value={age}
                label="Age"
                onChange={handleChange}
                renderValue={(value) => `⚠️  - ${value}`}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">Annually</MenuItem>
                    <MenuItem sx={{color:"#294243"}} value="arts">One-Time</MenuItem>
            </Select>
        </FormControl>
        </Grid>
        </div>
        </div>
  );
}