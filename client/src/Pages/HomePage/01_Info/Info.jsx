import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/material/Typography';
import "./Info.css";
import { Auth } from '../../../Components/Authorization/Auth';
import { Link } from 'react-router-dom';

const Info = () => {
    return(
        <div className="info">

            <div className="container-info">
                <div className="row">
                    <div className="column">
                <div className="info-left">

                    <span>StriveOpp</span>
                    <span>Making financing education accessible for students 
                        and early career professionals.
                    </span>

                    <img className="info" src="https://i.imgur.com/SVIl3Rg.png" />

                    <span>
                        StriveOpp is revolutionizing education and opportunities 
                        for students and early career professionals. Our database 
                        focuses on accessibility and offers over 700 scholarships 
                        for students seeking to study in Canada. To realize your 
                        greatest potential in a world with fair access to finance 
                        our education, join StriveOpp today.
                    </span>

                    <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 }, width:'80%' }}>
                            <Button variant="outlined" href="/About" sx={{bgcolor: "#294243", color:"#eee"}}>
                                Learn More
                            </Button>
            
                            <Button variant="solid" href="/Scholarships" sx={{bgcolor: "#294243"}}>
                                Scholarship Database
                            </Button>
                    </Box> 

                </div>
                </div>

                <div className="column">
                    <div className="info-right">
                        <Auth />
                    </div>
                </div>

                </div>
            </div>

        </div>
    )
}

export default Info;