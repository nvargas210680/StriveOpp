import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Copyright = () => {
    return(
        <div className="copyright">
            <Typography
                variant="body2"
                color="#294243"
                align="center">
                    {'Copyright © '}
            
                <Link
                    color="inherit"
                    href="/">
                    StriveOpp 
                </Link>
                
                {' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    )
}

export default Copyright;