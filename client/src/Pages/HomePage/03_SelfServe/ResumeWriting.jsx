import React from 'react'
import "./ResumeWriting.css"
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

const ResumeWriting = () => {
  return (
    <div className="cardresume">
        <img className="selfserve" src="https://i.imgur.com/ceA6YTg.png" />
        <h3 className="selfserve">Essay Editing</h3>
        <Box sx={{ display: 'flex', flexDirection:'column', width:'50%', marginTop:"10px"}}>
            
              <p className="cardcareercoachinginfo">
                Welcome to our Essay Editing Service, where your words are expertly 
                crafted to make a lasting impact. We understand the power of a well-written 
                essay in achieving academic and professional success, and our 
                team of skilled editors is dedicated to helping you shine.
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