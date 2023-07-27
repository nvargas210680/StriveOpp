import React from 'react'
import "./AccessDatabase.css"
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

const AccessDatabase = () => {
  return (
    <div className="cardcareercoaching">
        <img className="selfserve" src="https://i.imgur.com/Niuwe2x.png" />
        <h3 className="selfserve">Scholarship Database</h3>

        <Box sx={{ display: 'flex', flexDirection:'column', width:'50%', marginTop:"10px"}}>
            
              <p className="cardcareercoachinginfo">
                Our Scholarship Database is your gateway to a world of educational opportunities and possibilities.
                We understand that pursuing higher education can be a significant financial undertaking, 
                and that's why we are committed to supporting your academic journey with a vast and diverse 
                collection of scholarships.
              </p>
            
              <Button 
                variant="solid"
                sx={{ bgcolor: "#294243", marginBottom:"30px"}}
                href="/scholarships">
                  750+ Scholarships
              </Button>
        </Box>
        
    </div>
  )
}

export default AccessDatabase;