import React from "react";
import './Contact.css';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { TextField } from "@mui/material";
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

const Contact = () =>{
    return(
        <div className="contact">
            <div className="container-contact">
                <div className="contactleft">
                    <img src="" />
                </div>

                <div className="contactright">
                    <Typography
                        variant="h4" 
                        align="center" 
                        component="h1" 
                        gutterBottom>
                            {'Contact Form'.toUpperCase()}
                    </Typography>

                    <Grid container direction="column" justify="center" alignItems="center">
                        <Grid item>
                            <form id="contact-form">
                                <Grid item>
                                        <TextField
                                            style = {{width: 600}}
                                            id="name"
                                            label="Name"
                                            name="userName"
                                            margin="normal"
                                            />
                                    </Grid>

                                    <Grid item>
                                        <TextField
                                        style = {{width: 600}}
                                        id="email"
                                        label="Email"
                                        name="email"
                                        margin="normal"
                                        />
                                    </Grid>
                                    
                                    <Grid item>
                                        <TextField
                                        style = {{width: 600}}
                                        id="message"
                                        label="Message"
                                        name="message"
                                        margin="normal"
                                        multiline
                                        rows="6"
                                        />
                                    </Grid>

                                    <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 }, width:'80%', marginTop:"10px"}}>
                                            <Button
                                            type="reset"
                                            variant="solid"
                                            sx={{ bgcolor: "#294243", width:"40%", gap:"5px" }}>
                                            Reset
                                            </Button>
                                        
                                            <Button
                                            type="submit"
                                            variant="solid"
                                            sx={{ bgcolor: "#294243", width:"40%" }}>
                                            Submit
                                            </Button>
                                    </Box>
                            </form>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Contact;