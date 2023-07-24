import React from 'react'
import "./AccessDatabase.css"
import Button from '@mui/joy/Button';
import Grid from '@mui/material/Grid';

const AccessDatabase = () => {
  return (
    <div className="cardcareercoaching">
        <img className="selfserve" src="https://i.imgur.com/Niuwe2x.png" />
        <h3 className="selfserve">Scholarship Database</h3>

        <Grid container direction="column" justify="center" alignItems="center" spacing={1} margin="10px">
            <Grid item>
              <p className="cardcareercoachinginfo">
                lorem ipsum
              </p>
            </Grid>

            <Grid item>
              <Button 
                variant="solid"
                sx={{width:"50%", bgcolor: "#294243"}}
                href="/scholarships">
                  750+ Scholarships
              </Button>
            </Grid>
        </Grid>
        
    </div>
  )
}

export default AccessDatabase;