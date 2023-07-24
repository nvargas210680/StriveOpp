import React from 'react'
import "./ResumeWriting.css"
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

const ResumeWriting = () => {
  return (
    <div className="cardresume">
        <img className="selfserve" src="https://i.imgur.com/ceA6YTg.png" />
        <h3 className="selfserve">Resume Writing</h3>
        <Box sx={{ display: 'flex', flexDirection:'column', width:'50%', marginTop:"10px"}}>
            
              <p className="cardcareercoachinginfo">
                lorem ipsum
              </p>
            
              <Button 
                variant="solid"
                sx={{ bgcolor: "#294243", marginBottom:"30px"}}
                href="/scholarships">
                  Purchase Here
              </Button>
        </Box>
        
    </div>
  )
}

export default ResumeWriting